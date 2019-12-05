<template>
    <l-map :zoom="zoom" :center="initialLocation">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-heightgraph
                :options="{ width: 1000, position: 'bottomleft'}"
                :data="route"
                :position="'bottomright'"
                ></l-heightgraph>
        <l-geo-json :geojson="route"></l-geo-json>
    </l-map>
</template>
<script>
    import GeoJsonRoute from './data/normal-example'
    import * as L from 'leaflet'
    import { LMap, LTileLayer, LGeoJson} from 'vue2-leaflet'
    import Vue2LeafletHeightgraph from "../dist/Vue2LeafletHeightGraph.umd"

    export default {
        components: {
            'l-map': LMap,
            'l-tile-layer': LTileLayer,
            'l-heightgraph': Vue2LeafletHeightgraph,
            'l-geo-json': LGeoJson
        },
        data () {
            return {
                route: GeoJsonRoute,
                initialLocation: new L.LatLng(49.430068, 8.682718),
                zoom: 14
            }
        }
    }
</script>
<style>
    @import "~leaflet/dist/leaflet.css";
    @import "../dist/Vue2LeafletHeightGraph.css";
    html, body {
        height: 100%;
        margin: 0;
    }
</style>
