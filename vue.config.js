const nodeExternals = require('webpack-node-externals');

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        externals: [
          nodeExternals(),
          {
            leaflet: {
              root: "L",
              commonjs2: "leaflet",
              commonjs: "leaflet"
            }
          },
          { 'vue2-leaflet': 'vue2-leaflet' },
          { 'vue': 'vue' }
        ]
      }
    }
  }
}
