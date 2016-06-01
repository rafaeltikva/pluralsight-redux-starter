'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: ['eventsource-polyfill', // necessary for hot reloading with IE
  'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
  './src/index'],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [new _webpack2.default.HotModuleReplacementPlugin(), new _webpack2.default.NoErrorsPlugin()],
  module: {
    loaders: [{ test: /\.js$/, include: _path2.default.join(__dirname, 'src'), loaders: ['babel'] }, { test: /(\.css)$/, loaders: ['style', 'css'] }, { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' }, { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' }, { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' }, { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }]
  }
};

//# sourceMappingURL=webpack.config.dev-compiled.js.map