const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  stats: {
    errorDetails: true,
  },
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // or 'production'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // or 'production'
    }),
    
  ],
};