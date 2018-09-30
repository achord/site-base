// Webpack 4
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// TODO get minify css to work with node-sass
module.exports = {
  entry: { main: './src/app.js' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // TODO Get Babel loader working
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     "css-loader"
      //   ]
      // },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        // use: [
        //     "style-loader", // creates style nodes from JS strings
        //     "css-loader", // translates CSS into CommonJS
        //     "sass-loader", // compiles Sass to CSS, using Node Sass by default
        // ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader']
          })
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   inject: false,
    //   hash: true,
    //   template: './index.html',
    //   filename: 'index.html'
    // }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['./'] },
      // files:[
      //   './*.html',
      //   './**/*.scss'
      // ],
      injectCss:true
    }),
    new ExtractTextPlugin({
      filename: 'main.css'
    }),
  ]
};