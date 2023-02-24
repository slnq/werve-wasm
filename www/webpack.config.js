const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "../docs"),
    filename: "bootstrap.js",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  experiments: {
    asyncWebAssembly: true,
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    open: true
  }
};
