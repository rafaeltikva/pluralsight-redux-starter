'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _courseReducer = require('./courseReducer');

var _courseReducer2 = _interopRequireDefault(_courseReducer);

var _authorReducer = require('./authorReducer');

var _authorReducer2 = _interopRequireDefault(_authorReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  courses: _courseReducer2.default,
  authors: _authorReducer2.default //ES6 short-hand property names syntax
}); /* The Root Reducer */


exports.default = rootReducer;

//# sourceMappingURL=index-compiled.js.map