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
            },
            debug: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            if(this.debug) {
                console.log('mounted')
            }
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
            if(this.debug) {
                console.log('beforeDestroy')
            }
            if(this.hg) {
                this.hg.remove()
            }
        },
        methods: {
            updateGraph() {
                if(this.debug) {
                    console.log('updateGraph')
                }
                if(this.hg) {
                    this.hg.remove()
                }
                const map = this.$parent.mapObject
                let dataCollections = null;
                try {
                    this.hg.addTo(map)
                    let p = Object.keys(this.availableParsers).includes(this.parser) ? this.parser : 'normal'
                    
                    dataCollections = this.availableParsers[p](this.data)
                    this.hg.addData(dataCollections)
                } catch(err) {
                    console.log('Error in updateGraph: ')
                    console.log(err)
                    console.log('data', this.data)
                    console.log('dataCollections', dataCollections)
                }
            }
        },
        watch: {
            data: function () {
                if(this.debug) {
                    console.log('watch.data')
                }
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
