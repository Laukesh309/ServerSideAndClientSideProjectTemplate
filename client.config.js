const path = require("path")

module.exports = {
  entry: {
    bundle: "./client/index.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
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
  },
  mode: 'development',
}