const path = require('path')
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  target: 'node', // use require() & use NodeJs CommonJS style
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  externalsPresets: {
    node: true // in order to ignore built-in modules like path, fs, etc.
  },
  module: {
    rules: [{
      test: "/\.(js)$/",
      exclude: '/node_modules/',
      use: ['babel-loader']
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }

    ]
  }

}
