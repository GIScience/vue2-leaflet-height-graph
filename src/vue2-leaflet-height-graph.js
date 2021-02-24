import * as parsers from "./utils/parser.js"
import Leaflet from 'leaflet'
import sizeProps from './size-props'
import 'leaflet.heightgraph'
import 'leaflet.heightgraph/dist/L.Control.Heightgraph.min.css'

export default {
  name: 'l-control-height-graph',
  mixins: [sizeProps],
  data() {
    return {
      isOpen: false,
      availableParsers: parsers,
      hgInstance: null,
      breakpointsOrder: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultParser: 'geoJson',
      defaultPosition: 'bottomright',
      controlRef: null,
      addDataDebounceTimeoutId: null
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
      let leaflet = Leaflet
      return leaflet
    },
    optionsGetter () {
      let options = this.options || {}
      options.width = options.width || this.getWidth()
      options.parser = options.parser || this.defaultParser
      options.position = options.position || this.defaultPosition
      return options
    },
    mapObject () {
      const map = this.$parent.mapObject
      return map
    }
  },
  methods: {
    /**
     * Load the component, add the data, add the component to
     * the map and set the close button watcher
     */
    loadData () {
      const map = this.mapObject
      let heightGraphOptions = this.buildHeightGraphOptions()
      this.hgInstance = this.leafletAcessor.control.heightgraph(heightGraphOptions)
      this.controlRef = this.hgInstance.addTo(map)
      this.addData(this.data)
      this.isOpen = true
      this.watchCloseClick()
    },
    /**
     * Add data to the component
     * @param {Object} data 
     */
    addData (data) {
      clearTimeout(this.addDataDebounceTimeoutId)
      const context = this

      // Make sure that the changes in the data are debounced
      this.addDataDebounceTimeoutId = setTimeout(function () {
        try {
          let p = Object.keys(context.availableParsers).includes(context.optionsGetter.parser) ? context.optionsGetter.parser : 'noParser'
          context.hgInstance.addData(context.availableParsers[p](data))
        } catch (e) {
          let error = `Unable to parse data using ${context.optionsGetter.parser} parser \n ${e.message}`
          console.error(error)
        }  
      }, 200)   
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
      this.controlRef = null
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
        this.mapObject.removeControl(this.controlRef)
        let context = this

        setTimeout(() => {
          context.loadData()
        }, 100)
      },
      deep: true
    }
  }
}
