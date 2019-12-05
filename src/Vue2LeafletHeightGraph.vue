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
                availableParsers: parsers
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
                const map = this.$parent.mapObject;
                let hg = L.control.heightgraph({...this.options,...{
                    // merges quick settings with options if they are defined
                    ...(this.position && {position: this.position}),
                    ...(this.expand && {expand: this.expand})
                }})
                hg.addTo(map)
                let p = Object.keys(this.availableParsers).includes(this.parser) ? this.parser : 'normal'
                let dataCollections = this.availableParsers[p](this.data)
                hg.addData(dataCollections)

            })
        }
    }
</script>
<style>
    @import "../node_modules/leaflet.heightgraph/dist/L.Control.Heightgraph.min.css";
</style>
