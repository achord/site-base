// Webpack 4
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");

// TODO get minify css to work with node-sass
module.exports = {
  entry: { main: './src/app.js' },
  // Optional. Default is ./dist
  output: {
    path: path.join(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader'],
          })
      },
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract(
      //     {
      //       fallback: 'style-loader',
      //       use: [{ 
      //         loader: 'css-loader', 
      //         options: { 
      //           minimize: true 
      //         } 
      //       }]
      //     })
      // }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   inject: false,
    //   hash: true,
    //   template: './src/index.html',
    //   filename: 'index.html'
    // }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      // For static site
      port: 3000,
      // For self-hosted e.g. Craft CMS
      //proxy: "localhost:8888",
      server: { baseDir: ['./'] },
      files:[
        './*.html',
        './**/*.scss',
      ],
      injectCss: true, 
    }),
    new ExtractTextPlugin('main.css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    }),
    new OptimizeCssAssetsPlugin({cssProcessorOptions: {map: {inline: false, annotations: true}}})
  ]
};