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
                hgInstance: null,
                controlRef: null,
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
            container: {
              type: String | Boolean,
              default: false
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
            const map = this.$parent.mapObject;
            this.hgInstance = L.control.heightgraph({...this.options,...{
                // merges quick settings with options if they are defined
                ...(this.position && {position: this.position}),
                ...(this.expand && {expand: this.expand})
            }})
            this.controlRef = this.hgInstance.addTo(map)
            if(this.container) {
              const container = this.getContainer();
              container.innerHTML = ''
              container.appendChild(this.controlRef.onAdd(map));
              window.addEventListener('resize', this.onResize);


              try {
                document.querySelector('.leaflet-control-container .heightgraph.leaflet-control').hidden = true
              } catch (e) {
                console.error('Unable to hide the default height graph control')
              }
            } else {
              this.hgInstance.addTo(map)
            }
          let p = Object.keys(this.availableParsers).includes(this.parser) ? this.parser : 'normal'
          let dataCollections = this.availableParsers[p](this.data)
            this.hgInstance.addData(dataCollections)
        },
        beforeDestroy() {
            if(this.debug) {
                console.log('beforeDestroy')
            }
            if(this.hgInstance) {
              window.removeEventListener('resize', this.onResize);
              this.hgInstance.remove()
                this.controlRef = null;
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
        },
      methods: {
        onResize() {
          const { clientWidth: width, clientHeight: height } = this.getContainer();
          this.hgInstance.resize({ width, height: this.options.height || height });
        },
        getContainer() {
          return document.querySelector(this.container) || document.getElementById(this.container);
        }
      }
    }
</script>
<style>
    @import "../node_modules/leaflet.heightgraph/dist/L.Control.Heightgraph.min.css";
</style>
