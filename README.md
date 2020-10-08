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
    import LHeightGraph from 'vue2-leaflet-height-graph'
    // ...
    export default {
        // ...
        components: { 'l-height-graph': LHeightGraph }
        // ...
    }
</script>
// ...
```

### Global

In your `main.js`:

```js
import Vue from 'vue';
import Vue2LeafletHeightGraph from 'vue2-leaflet-height-graph';
// ...
Vue.component('l-height-graph', Vue2LeafletHeightGraph);
// ...
```

## Usage

With the `LHeightGraph` component loaded into Vue, add the
`l-height-graph` element inside an `l-map`.

```html
<l-map>
  <l-height-graph :data="heightGraphData"/>
  <!-- other map components -->
</l-map>
```

## Properties

The following properties can be passed to the `LHeightGraph` component:

### data

Takes an array of GeoJSON FeatureCollections as described
in the [Leaflet.Heigthgraph Readme](https://github.com/GIScience/Leaflet.Heightgraph/#supported-data)
by default.

The component will assume the data is in `geoJson` format unless you specify another supported parser via options (see [options](#options) below)

Currently supported formats for parser values:

- `ors`: The response of the [openrouteservice directions endpoint](https://openrouteservice.org/dev/#/api-docs/v2/directions/{profile}/geojson/post)
in geojson format. Don't forget to set `elevation=true`.

- `geojson`: data in a `geoJson` format.

- `noParser`: the data does not need to be parsed [see expected data structure](./src/data/no-parser-example.js)

Other relevant formats can be made available by contributing a parser.

examples: see [data folder](./src/data)

default: `[]`

### width via grid/view breakpoint

This component supports specifying a dynamic width based current screen resolution and as a portion of the parent width, similar to what is used in the [vuetify](https://dev.vuetifyjs.com/en/components/grids).
So if can be defined the element width for mutiples scenarios, like: md8, lg10, xl6.

### options

Use the `options` property to specify any of the
[Leaflet.Heightgraph options](https://github.com/GIScience/Leaflet.Heightgraph#default-options)
to be set when the control is created.

If no options are specified the default options from Leaflet.Heightgraph are used.
the wrapper has it own defaults only for:

- width: use the grid system as default. If width is specified it will override the grid system value and not be responsive.
- parser: = `geoJson`
- position: `bottomright`

example:

```js
{ width: 1000, position: 'bottomleft', parser: 'ors' }
```

#### position

String to set the position on the map. Values can be `'bottomleft'`, `'bottomright'`, `'topleft'`, `'topright'`.
Fast setting for `options.position` (overwriting).

#### expand

Boolean for expanding the heightgraph window on creation. Values are `true` and `false`.
Fast setting for `options.expand` (overwriting).

### Events

This component emits a `closed` event when the up-right corner graph close button is hit and it is closed. It can be used to synchronize the visibility of the graph with other elements when it is displayed conditionally.
