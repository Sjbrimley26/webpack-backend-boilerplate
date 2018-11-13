const path = require("path");

const { uglifyPlugin, circularPlugin } = require("./webpack-plugins");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "./"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader?cacheDirectory",
        query: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  },

  plugins: [circularPlugin],

  optimization: {
    minimizer: [uglifyPlugin]
  }
};
