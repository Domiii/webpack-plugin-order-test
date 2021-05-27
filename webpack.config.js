const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = function (webpack, modSource) {
  const Root = __dirname;
  const context = Root;
  const src = path.resolve(Root, 'src');

  const mode = 'development';

  const entry = {
    [`app-${webpack.version[0]}${modSource ? '-modded' : ''}`]: './src/index.js'
  };

  const output = {
    path: path.resolve(Root, 'dist')
  };

  const resolve = {};

  const plugins = [
    new webpack.DefinePlugin({
      'A.B.C': JSON.stringify('good!')
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: mode
    })
  ];

  const babelOptions = {
    plugins: modSource ?
      [
        '@dbux/babel-plugin'
      ] :
      []
  };

  const rules = [
    {
      loader: 'babel-loader',
      include: [src],
      options: babelOptions
    }
  ];

  const stats = {
    errorDetails: true
  };

  const externals = [
    {
      '@dbux/runtime': 'commonjs @dbux/runtime'
    },
    nodeExternals({
      additionalModuleDirs: [
        path.resolve(process.cwd(), 'node_modules')
      ]
    })
  ];

  return {
    watchOptions: {
      poll: true,
      ignored: /node_modules/
    },
    mode,
    devtool: false,
    target: 'node',
    context,
    entry,
    output,
    resolve,
    plugins,
    module: {
      rules
    },
    stats,
    externals,
    node: {
      __dirname: false,
      __filename: false,
    }
  };
};