const webpack = require('webpack');
module.exports = [
  require('../webpack.config')(webpack, true),
  require('../webpack.config')(webpack, false)
];