# vue2-leaflet-height-graph

This is a [Vue2Leaflet](https://github.com/KoRiGaN/Vue2Leaflet) plugin to provide the
[Leaflet.Heightgraph](https://github.com/GIScience/Leaflet.Heightgraph) control
on [Leaflet](https://leafletjs.com/) maps in [Vue](https://vuejs.org/) applications.


## Installation
```bash
npm install --save vue2-leaflet-height-graph
```

## Import
You could either import the component locally where you need it or register it globally.

### Local
In a `.vue` file:
```vue
<script>
    import LControlHeightGraph from 'vue2-leaflet-height-graph'
    // ...
    export default {
        // ...
        components: { 'l-height-graph': LControlHeightGraph }
        // ...
    }
</script>
<style>
@import "~vue2-leaflet-height-graph/dist/Vue2LeafletHeightGraph.css";
</style>
// ...
```

### Global
In your `main.js`:
```js
import Vue from 'vue';
import Vue2LeafletHeightGraph from 'vue2-leaflet-height-graph';
import 'vue2-leaflet-heightgraph/dist/Vue2LeafletHeightGraph.css'
// ...
Vue.component('l-height-graph', Vue2LeafletHeightGraph);
// ...
```

## Usage

With the `LControlHeightGraph` component loaded into Vue, add the
`l-height-graph` element inside an `l-map`.

```html
<l-map>
  <l-height-graph
    :data="heightGraphData" 
    :options="{ width: 1000, position: 'bottomleft'}"/>
  <!-- other map components -->
</l-map>
```

## Properties
The following properties can be passed to the `LControlHeightGraph` component:

### data
Takes an array of GeoJSON FeatureCollections as described
in the [Leaflet.Heigthgraph Readme](https://github.com/GIScience/Leaflet.Heightgraph/#supported-data)
by default.

Specify the `parser` property to use other Array or Object input formats.

Currently supported formats for parser values:
- `'ors'`: The response of the [openrouteservice directions endpoint](https://openrouteservice.org/dev/#/api-docs/v2/directions/{profile}/geojson/post)
in geojson fromat. Don't forget to set `elevation=true`.

Other relevant formats can be made available by contributing a parser. 

examples: see [data folder](./src/data)

default: `[]`
### options
Use the `options` property to specify any of the
[Leaflet.Heightgraph options](https://github.com/GIScience/Leaflet.Heightgraph#default-options)
to be set when the control is created.

If no options are specified the default options from Leaflet.Heightgraph are used.

example:
```js
{ width: 1000, position: 'bottomleft'}
```

### position
String to set the position on the map. Values can be `'bottomleft'`, `'bottomright'`, `'topleft'`, `'topright'`.
Fast setting for `options.position` (overwriting).

### expand
Boolean for expanding the heightgraph window on creation. Values are `true` and `false`.
Fast setting for `options.expand` (overwriting).

### parser
Set the name of the parser function as String to support different `data` input.

Available parsers:
- `'normal'`
- `'ors'`

If you want to support relevant elevation data, consider contributing a parser function.

default: `'normal'`
