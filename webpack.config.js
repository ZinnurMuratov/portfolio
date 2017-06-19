const path = require('path');

module.exports = {
  entry: './client/main.ts',
  output: {
    path: path.resolve(__dirname, '.dev/client'),
    filename: '[name].bundle.js' // prod '[name].[chunkhash].bundle.js' 
  }
};