module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "860c":
/***/ (function(module, exports) {

module.exports = require("leaflet");

/***/ }),

/***/ "dc65":
/***/ (function(module, exports) {

module.exports = require("current-script-polyfill");

/***/ }),

/***/ "ed27":
/***/ (function(module, exports) {

module.exports = require("leaflet.heightgraph/dist/L.Control.Heightgraph.min.css");

/***/ }),

/***/ "ef37":
/***/ (function(module, exports) {

module.exports = require("leaflet.heightgraph");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./src/utils/parser.js
var parser_namespaceObject = {};
__webpack_require__.r(parser_namespaceObject);
__webpack_require__.d(parser_namespaceObject, "ors", function() { return ors; });
__webpack_require__.d(parser_namespaceObject, "noParser", function() { return noParser; });
__webpack_require__.d(parser_namespaceObject, "geoJson", function() { return geoJson; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("dc65")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6e4f93f4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Vue2LeafletHeightGraph.vue?vue&type=template&id=dc30bd84&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"none"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Vue2LeafletHeightGraph.vue?vue&type=template&id=dc30bd84&

// CONCATENATED MODULE: ./src/utils/parser.js
/**
 * Builds GeoJson Feature
 * @param extraSegment - segment with constant extra value
 * @param coordinates - coordinates array
 * @returns {{geometry: {coordinates: *, type: string}, type: string, properties: {attributeType: *}}}
 */
const buildFeature = (extraSegment, coordinates) => {
    const [startIdx, endIdx, attributeType] = extraSegment
    return {
        type: "Feature",
        geometry: {
            type: "LineString",
            coordinates: coordinates.slice(startIdx, endIdx + 1)
        },
        properties: {
            attributeType: attributeType
        }
    }
}

/**
 * Builds GeoJson feature collection
 * @param features - all features for
 * @param extraKey
 * @returns {{features: *, type: string, properties: {summary: *}}}
 */
const buildFeatureCollection = (features, extraKey) => {
    return {
        type: 'FeatureCollection',
        features: features,
        properties: {
            summary: extraKey
        }
    }
}

/**
 * Build leaflet.heightgraph data
 * @param extras - ors
 * @param coordinates - coordinates array
 * @returns {Array} height graph conformal data. See https://github.com/GIScience/Leaflet.Heightgraph#supported-data
 */
const buildCollections = (extras, coordinates) => {
    let collections = []
    Object.entries(extras)
    .forEach(([extraKey, extraData]) => {
        let features = []
        for (let extraSegment of extraData.values) {
            const feature = buildFeature(extraSegment, coordinates)
            features.push(feature)
        }
        const featureCollection = buildFeatureCollection(features, extraKey)
        collections.push(featureCollection)
    })
    return collections
}

/**
 * Adds the default attributeType property 'elevation' to Features if it doesn't exist.
 * @param feature
 */
const addAttributeTypeProperty = (feature) => {
    feature.properties = feature.properties || {}
    feature.properties.attributeType = feature.properties.attributeType || 'elevation'
}

/**
 *
 * @param orsResponse
 * @returns {Array} collections - height graph conformal data. See https://github.com/GIScience/Leaflet.Heightgraph#supported-data
 */
function ors(orsResponse) {
    let collections = null
    let responseObject = typeof orsResponse === 'string' ? JSON.parse(orsResponse) : orsResponse
    // extract coordinates and extras from ors response
    let {features: [{geometry: {coordinates: coordinates}, properties: {extras: extras}}]} = responseObject
    if (extras) {
        collections = buildCollections(extras, coordinates)
    }
    return collections
}
function noParser(data) {
    return data
}

/**
 * The geoJson parser should accept simple LineString geometries, Features and FeatureCollections.
 * It builds the Array of FeatureCollections containing the required 'summary' and 'attributeType' tags.
 * @param data - the geoJson object
 * @returns {Array}
 */
function geoJson(data) {
    // parse to object if necessary
    data = typeof data === 'string' ? JSON.parse(data) : data
    // transforms LineString data to Feature type
    if (data.type === "LineString") {
        data = buildFeature(
            [
                0,
                data.coordinates.length - 1,
                'elevation'
            ],
            data.coordinates
        )
    }
    // transforms Feature data to FeatureCollection Type
    if (data.type === "Feature") {
        addAttributeTypeProperty(data)
        data = buildFeatureCollection([data], 'elevation')
    }
    // transforms FeatureCollection to array of FeatureCollections
    if (data.type === "FeatureCollection")
        for (let feature of data.features) {
            addAttributeTypeProperty(feature)
        }
        data.properties = data.properties || {}
        data.properties.summary = data.properties.summary || 'elevation'
    return [data]
}

// Template for a custom parser
/*export function templateParser(yourInputData)
     DO PARSING HERE
     let heighGraphConformalData = parsing(yourInputData)
     return heighGraphConformalData
}*/

// EXTERNAL MODULE: external "leaflet"
var external_leaflet_ = __webpack_require__("860c");
var external_leaflet_default = /*#__PURE__*/__webpack_require__.n(external_leaflet_);

// CONCATENATED MODULE: ./src/size-props.js

/* harmony default export */ var size_props = ({
  props: [
    'xs1', 'xs2', 'xs3','xs4','xs5','xs6', 'xs7', 'xs8', 'xs9', 'xs10', 'xs11', 'xs12',
    'sm1', 'sm2', 'sm3','sm4','sm5','sm6', 'sm7', 'sm8', 'sm9', 'sm10', 'sm11', 'sm12',
    'md1', 'md2', 'md3','md4','md5','md6', 'md7', 'md8', 'md9', 'md10', 'md11', 'md12',
    'lg1', 'lg2', 'lg3','lg4','lg5','lg6', 'lg7', 'lg8', 'lg9', 'lg10', 'lg11', 'lg12',
    'xl1', 'xl2', 'xl3','xl4','xl5','xl6', 'xl7', 'xl8', 'xl9', 'xl10', 'xl11', 'xl12',    
  ],
});

// EXTERNAL MODULE: external "leaflet.heightgraph"
var external_leaflet_heightgraph_ = __webpack_require__("ef37");

// EXTERNAL MODULE: external "leaflet.heightgraph/dist/L.Control.Heightgraph.min.css"
var L_Control_Heightgraph_min_css_ = __webpack_require__("ed27");

// CONCATENATED MODULE: ./node_modules/eslint-loader??ref--12-0!./src/vue2-leaflet-height-graph.js?vue&type=script&lang=js&






/* harmony default export */ var vue2_leaflet_height_graphvue_type_script_lang_js_ = ({
  name: 'l-control-height-graph',
  mixins: [size_props],
  data() {
    return {
      isOpen: false,
      availableParsers: parser_namespaceObject,
      hgInstance: null,
      breakpointsOrder: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultParser: 'geoJson',
      defaultPosition: 'bottomright',
      ready: false
    }
  },
  components: {
    ResizeObserver
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
      type: [Object, Array],
      default: () => []
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
  computed: {
    leafletAcessor() {
      let leaflet = external_leaflet_default.a
      return leaflet
    },
    optionsGetter () {
      let options = this.options || {}
      options.width = options.width || this.getWidth()
      options.parser = options.parser || this.defaultParser
      options.position = options.position || this.defaultPosition
      return options
    }
  },
  methods: {
    /**
     * Load the component, add the data, add the component to
     * the map and set the close button watcher
     */
    loadData () {
      const map = this.$parent.mapObject
      let heightGraphOptions = this.buildHeightGraphOptions()
      this.hgInstance = this.leafletAcessor.control.heightgraph(heightGraphOptions)
      this.hgInstance.addTo(map)
      this.addData(this.data)
      this.isOpen = true
      this.watchCloseClick()
      this.ready = true
    },
    /**
     * Add data to the component
     * @param {Object} data 
     */
    addData (data) {
      try {
        let p = Object.keys(this.availableParsers).includes(this.optionsGetter.parser) ? this.optionsGetter.parser : 'noParser'
        this.hgInstance.addData(this.availableParsers[p](data))
      } catch (e) {
        let error = `Unable to parse data using ${this.optionsGetter.parser} parser \n ${e.message}`
        console.error(error)
      }      
    },
    /**
     * When the window size changes
     * update the component size
     */
    updateSize () {
      if (this.isOpen && this.hgInstance ) {
        this.hgInstance.resize({width: this.getWidth(), height: this.optionsGetter.height})
      }
    },
    /**
     * Get the width that must be
     * used to render the component
     * @returns {Number}
     */
    getWidth () {
      let breakpoint = this.getViewBreakpoint()
      let sizePropValue = this.getSizePecentualValue(breakpoint)
      let parentWidth = this.$el.parentNode.clientWidth
      if (sizePropValue) {
        let width = (parentWidth / 12) * sizePropValue
        return width * 0.98 // make sure there is a little space on the sides
      } else { // If no size was defined, use almos all the parent size
        return parentWidth * 0.98 // make sure there is a little space on the sides
      }
    },
    /**
     * Get the size value considering the current
     * breakpoint and the previous breakpoint available
     * If there is no value for the current view breakpoint
     * try to get the value for the previous breakpoint available
     * Example: window size is medium, but only `sm8` and `lg8` view
     * breakpoints size are defined, so the value for sm, in this case 2
     * is returned as the percentile of the parent element that must be 
     * used as component width.
     * @param {String} breakpoint 
     * @returns {Number} sizePropValue
     */
    getSizePecentualValue (breakpoint) {
      // Find the passed size option      
      let sizePropValue = this.getPropBreakpoitValue(breakpoint)
      if (!sizePropValue) {
        let currentBreakPointIndex = this.breakpointsOrder.indexOf(breakpoint) 
        let previousIndex = currentBreakPointIndex -1
        if (this.breakpointsOrder[previousIndex]) {
          breakpoint = this.breakpointsOrder[previousIndex]
          sizePropValue = this.getSizePecentualValue(breakpoint)
        }
      }
      return sizePropValue
    },
    /**
     * Get the 
     * @param {String} breakpoint 
     * @returns {Number} sizePropValue
     */
    getPropBreakpoitValue (breakpoint) {
      let sizePropValue = null
      // go through every prop starting with
      // the given breakpoint and get the
      // value of this breakpoint value
      // For example: md1 -> value = 1; lg2 => value = 2 etc
      for (let index = 1; index <= 12; index++) {
        let breakpointSize = `${breakpoint}${index}`
        if (this.$props[breakpointSize] !== undefined) {
          sizePropValue = index
          break
        }        
      }
      return sizePropValue
    },
    /**
     * Get the current view breakpoint 
     * considering the innerWidth
     * and the breakpoints defined 
     * by vuetify. @see https://dev.vuetifyjs.com/en/components/grids
     * @returns {String} size
     */
    getViewBreakpoint () {
      let size = ''
      switch (true) {
        case (window.innerWidth < 500):
          size = 'xs'
          break;
        case (window.innerWidth > 600 && window.innerWidth < 960):
          size = 'sm'
          break; 
        case (window.innerWidth > 960 && window.innerWidth < 1264):
          size = 'md'
          break; 
        case (window.innerWidth > 1264):
          size = 'xl'
          break;      
      }
      return size
    },
    /**
     * Build the options object expected by
     * the leaflet.heightgraph library
     * by merging vuejs component options
     * @returns {Object}
     */
    buildHeightGraphOptions () {
      let heightGraphOptions = {
        ...this.optionsGetter, ...{
          // merges quick settings with options if they are defined
          ...(this.position && { position: this.position }),
          ...(this.expand && { expand: this.expand })
        }
      }
      return heightGraphOptions
    },
    /**
     * Adds a onclick listener to the graph close
     * button and emits a vuejs `closed` event when
     * the button is clicked and the graph is closed
     * Considering that the wrapped leaflet.heightgraph
     * component is closed (and this wrapping component is kept)
     * we also set the flag isOpen as false
     * @emits closed
     */
    watchCloseClick () {
      let context = this
      // If there is a valid instance
      // and it is open, then set the listener
      if (this.hgInstance && this.isOpen) {
        let elements = document.getElementsByClassName('heightgraph-close-icon')
        // If the close btn is found
        if (elements.length > 0) {
          var closeAnchor = elements[0]
          closeAnchor.onclick = () => {
            context.hgInstance.remove()
            context.isOpen = false
            context.$emit('closed')
          }
        }
      }
    }
  },
  mounted() {
    this.$nextTick(this.loadData)
    window.addEventListener('resize', this.updateSize)
  },
  beforeDestroy() {
    if (this.hgInstance) {
      this.hgInstance.remove()
      this.isOpen = false
      this.ready = false
    }
  },
  watch: {
    data: {
      handler: function (newVal) {
        this.$nextTick(() => {
          this.addData(newVal)
        })
      },
      deep: true
    },
    'options': {
      handler: function () {
        this.ready = false
        let context = this

        setTimeout(() => {
          context.ready = true
          context.loadData()
        }, 100)
      },
      deep: true
    }
  }
});

// CONCATENATED MODULE: ./src/vue2-leaflet-height-graph.js?vue&type=script&lang=js&
 /* harmony default export */ var src_vue2_leaflet_height_graphvue_type_script_lang_js_ = (vue2_leaflet_height_graphvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/Vue2LeafletHeightGraph.vue





/* normalize component */

var component = normalizeComponent(
  src_vue2_leaflet_height_graphvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Vue2LeafletHeightGraph = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Vue2LeafletHeightGraph);



/***/ })

/******/ })["default"];
//# sourceMappingURL=Vue2LeafletHeightGraph.common.js.map