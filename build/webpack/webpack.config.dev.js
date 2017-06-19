const helpers = require('./helper.methods');

module.exports = {
  context: helpers.root('.'),
  entry: helpers.root('client/main.ts'),
  output: {
    path: helpers.root('.dev/client/'),
    filename: '[name].bundle.js' // prod '[name].[chunkhash].bundle.js' 
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.ts', '.js', '.html'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    rules: [
      { test: /\.ts$/, exclude: /node_modules/, enforce: 'pre', loader: 'tslint-loader' },
      { test: /\.ts$/, exclude: /node_modules/, loader: 'awesome-typescript-loader' },
      { test: /\.html$/, loader: 'raw-loader', exclude: ['./src/index.html'] }
    ],
  },
  watch: true,
};
