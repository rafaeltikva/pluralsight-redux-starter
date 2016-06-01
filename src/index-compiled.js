'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _courseActions = require('./actions/courseActions');

var _authorActions = require('./actions/authorActions');

require('./styles/styles.css');

require('../node_modules/bootstrap/dist/css/bootstrap.min.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)(); // Webpack can import CSS files too!

store.dispatch((0, _courseActions.loadCourses)());
store.dispatch((0, _authorActions.loadAuthors)());

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: _routes2.default })
), document.getElementById('app'));

//# sourceMappingURL=index-compiled.js.map