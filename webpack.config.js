// Webpack 4
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: { main: './src/js/index.js' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // TODO Get Babel loader working
        // use: {
        //   loader: "babel-loader"
        // }
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
};