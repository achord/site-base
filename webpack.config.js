const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['./'] },
      files:['./*.html'],
      injectCss:true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};