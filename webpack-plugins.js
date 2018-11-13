const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");

const uglifyPlugin = new UglifyJSPlugin({
  cache: true,
  parallel: true
});

const circularPlugin = new CircularDependencyPlugin({
  // exclude detection of files based on a RegExp
  exclude: /a\.js|node_modules/,
  // add errors to webpack instead of warnings
  failOnError: true,
  // set the current working directory for displaying module paths
  cwd: process.cwd()
});

module.exports = {
  uglifyPlugin,
  circularPlugin
};
