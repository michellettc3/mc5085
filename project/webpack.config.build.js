const path = require('path')

const { CleanWebpackPlugin } = require('./node_modules/clean-webpack-plugin/dist/clean-webpack-plugin')

const merge = require('webpack-merge')
const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'production',

  output: {
    path: path.join(__dirname, 'InifniteAutoScrollingGallery')
  },

  plugins: [
    new CleanWebpackPlugin()
  ]
})
