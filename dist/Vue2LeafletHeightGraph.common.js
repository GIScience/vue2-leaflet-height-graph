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

/***/ "ae28":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c765":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vue2LeafletHeightGraph_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ae28");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vue2LeafletHeightGraph_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vue2LeafletHeightGraph_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vue2LeafletHeightGraph_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "dc65":
/***/ (function(module, exports) {

module.exports = require("current-script-polyfill");

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
__webpack_require__.d(parser_namespaceObject, "normal", function() { return normal; });
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d5174f1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Vue2LeafletHeightGraph.vue?vue&type=template&id=678cdb79&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"none"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Vue2LeafletHeightGraph.vue?vue&type=template&id=678cdb79&

// EXTERNAL MODULE: external "leaflet.heightgraph"
var external_leaflet_heightgraph_ = __webpack_require__("ef37");

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
function normal(data) {
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Vue2LeafletHeightGraph.vue?vue&type=script&lang=js&
//
//
//
//
//




/* harmony default export */ var Vue2LeafletHeightGraphvue_type_script_lang_js_ = ({
    name: 'l-control-height-graph',
    data () {
        return {
            availableParsers: parser_namespaceObject,
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
});

// CONCATENATED MODULE: ./src/Vue2LeafletHeightGraph.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Vue2LeafletHeightGraphvue_type_script_lang_js_ = (Vue2LeafletHeightGraphvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Vue2LeafletHeightGraph.vue?vue&type=style&index=0&lang=css&
var Vue2LeafletHeightGraphvue_type_style_index_0_lang_css_ = __webpack_require__("c765");

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
  src_Vue2LeafletHeightGraphvue_type_script_lang_js_,
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