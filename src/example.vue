<template>
    <div id="app">
        <l-map ref="map" :zoom="zoom" :center="initialLocation" :bounds="bounds">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-heightgraph
                    :options="heightGraphOptions"
                    :data="data"
                    :position="'bottomright'"
                    :parser="parser"
            ></l-heightgraph>
            <l-geo-json ref="geojson" :geojson="data"></l-geo-json>
            <l-control class="example-custom-control" position="bottomleft">
                <p @click="changeData">
                    Change data
                </p>
            </l-control>
        </l-map>
    </div>
</template>
<script>
    import {geoJsonRoute} from "./data/normal-example"
    import {geoJsonRoute2} from "./data/normal-example-2"
    import {orsJson} from "./data/ors-example"
    import {geoJson} from "./data/geojson-example"
    import {geoJson2} from "./data/geojson-example-2"
    import {geoJson3} from "./data/geojson-example-3"
    import * as L from "leaflet"
    import {LControl, LGeoJson, LMap, LTileLayer} from "vue2-leaflet"
    import Vue2LeafletHeightgraph from "../src/Vue2LeafletHeightGraph"
    import {colorMappings} from "./data/colorMappings"

    export default {
        components: {
            "l-map": LMap,
            "l-tile-layer": LTileLayer,
            "l-heightgraph": Vue2LeafletHeightgraph,
            "l-geo-json": LGeoJson,
            "l-control": LControl
        }, data() {
            return {
                data: geoJsonRoute,
                initialLocation: new L.LatLng(49.430068, 8.682718),
                bounds: null,
                zoom: 14,
                parser: "normal",
                dataSets: [
                    {
                        data: geoJsonRoute, parser: "normal"
                    },
                    {
                        data: geoJsonRoute2,
                        parser: 'normal'
                    },
                    {
                        data: orsJson,
                        parser: 'ors'
                    },
                    {
                        data: geoJson,
                        parser: 'geoJson'
                    },
                    {
                        data: geoJson2,
                        parser: 'geoJson'
                    },
                    {
                        data: geoJson3,
                        parser: 'geoJson'
                    }
                ],
                dataSetId: 0,
                heightGraphOptions: {
                    width: 1000,
                    position: "bottomleft",
                    graphStyle: {
                        opacity: 0.8,
                        'fill-opacity': 0.5,
                        'stroke-width': '2px'
                    },
                    mappings: colorMappings
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.bounds = this.getGeoJsonBounds()
            })
        },
        methods: {
            changeData() {
                this.dataSetId = ++this.dataSetId === this.dataSets.length ? 0 : this.dataSetId
                this.parser = this.dataSets[this.dataSetId].parser
                this.data = this.dataSets[this.dataSetId].data
                this.$nextTick(() => {
                    this.bounds = this.getGeoJsonBounds()
                })
            },
            getGeoJsonBounds() {
                return this.$refs.geojson.getBounds()
            }
        }
    }
</script>
<style>
    @import "~leaflet/dist/leaflet.css";
    @import "../dist/Vue2LeafletHeightGraph.css";

    body {
        padding: 0;
        margin: 0;
    }

    html, body {
        height: 100%;
        width: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }

    #app {
        height: 100%;
        width: 100%;
    }

    .example-custom-control {
        background: #fff;
        padding: 0 0.5em;
        border: 1px solid #aaa;
        border-radius: 0.1em;
        cursor: pointer;
    }
</style>
