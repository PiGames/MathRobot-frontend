var path = require('path')
var webpack = require('webpack')

const entry = [
  './src/index.jsx'
]

if ( process.env.NODE_ENV !== 'production' ) {
  entry.push( 'webpack-dev-server/client?http://localhost:3000' )
}

module.exports = {
  devtool: '#cheap-module-eval-source-map',
  entry,
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BACKEND_URL': JSON.stringify(process.env.BACKEND_URL)
    }),
  ]
}
