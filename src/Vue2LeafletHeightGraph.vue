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
                hgInstance: null
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
                const map = this.$parent.mapObject;
                this.hgInstance = L.control.heightgraph({...this.options,...{
                    // merges quick settings with options if they are defined
                    ...(this.position && {position: this.position}),
                    ...(this.expand && {expand: this.expand})
                }})
                this.hgInstance.addTo(map)
                let p = Object.keys(this.availableParsers).includes(this.parser) ? this.parser : 'normal'
                let dataCollections = this.availableParsers[p](this.data)
                this.hgInstance.addData(dataCollections)
            })
        },
        beforeDestroy() {
            if(this.debug) {
                console.log('beforeDestroy')
            }
            if(this.hgInstance) {
                this.hgInstance.remove()
            }
        },
        watch: {
            data: function (newVal, oldVal) {
                this.$nextTick(() => {
                    if (this.debug) {console.log("data change")}
                    try {
                        let p = Object.keys(this.availableParsers).includes(this.parser) ? this.parser : 'normal'
                        this.hgInstance.addData(this.availableParsers[p](newVal))
                    } catch(e) {
                        console.error('Unable to parse data using "'
                            + this.parser + '" parser.\n'
                            + e)
                    }
                })
            }
        }
    }
</script>
<style>
    @import "../node_modules/leaflet.heightgraph/dist/L.Control.Heightgraph.min.css";
</style>
