
import merge from 'webpack-merge'
import { join } from 'path'

import config from './webpack.config'

export default merge(config, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    writeToDisk: true
  },

  output: {
    path: join(__dirname, 'InifniteAutoScrollingGallery')
  }
})