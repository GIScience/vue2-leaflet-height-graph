import Vue2LeafletHeightGraph from "./Vue2LeafletHeightGraph"

export default Vue2LeafletHeightGraph
// define Vue2LeafletHeightGraph for Node module pattern loaders, including Browserify
if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = Vue2LeafletHeightGraph
  // define Openrouteservice as an AMD module
  // eslint-disable-next-line no-undef
} else if (typeof define === 'function' && define.amd) {
  // eslint-disable-next-line no-undef
  define(Vue2LeafletHeightGraph)
}

if (typeof window !== 'undefined') {
  window.Vue2LeafletHeightGraph = Vue2LeafletHeightGraph
}


