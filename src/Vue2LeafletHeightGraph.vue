<template>
    <div style="display: none;">
    </div>
</template>

<script>
    import 'leaflet.heightgraph'
    import * as parsers from "@/utils/parser"

    export default {
        name: 'l-control-height-graph',
        data () {
            return {
                availableParsers: parsers,
                hg: null,
            }
        },
        props: {
            position: {
                type: String,
                default: undefined
            },
            expand: {
                type: Boolean,
                default: undefined
            },
            data: {
                type: [Object,Array],
                default: () => []
            },
            parser: {
                type: String,
                default: 'normal'
            },
            options: {
                type: Object,
                default: () => {}
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.hg = L.control.heightgraph({...this.options,...{
                    // merges quick settings with options if they are defined
                    ...(this.position && {position: this.position}),
                    ...(this.expand && {expand: this.expand})
                }});
                this.updateGraph()
            })
        },
        beforeDestroy() {
            if(this.hg) {
                this.hg.remove()
            }
        },
        methods: {
            updateGraph() {
                if(this.hg) {
                    this.hg.remove()
                }
                const map = this.$parent.mapObject
                this.hg.addTo(map)
                let p = Object.keys(this.availableParsers).includes(this.parser) ? this.parser : 'normal'
                let dataCollections = this.availableParsers[p](this.data)
                this.hg.addData(dataCollections)
            }
        },
        watch: {
            data: function () {
                if(!this.data && this.hg) {
                    this.hg.remove()
                } else {
                    this.updateGraph();
                }
            },
        }
    }
</script>
<style>
    @import "../node_modules/leaflet.heightgraph/dist/L.Control.Heightgraph.min.css";
</style>
