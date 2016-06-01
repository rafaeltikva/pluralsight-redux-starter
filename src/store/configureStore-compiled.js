'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxImmutableStateInvariant = require('redux-immutable-state-invariant');

var _reduxImmutableStateInvariant2 = _interopRequireDefault(_reduxImmutableStateInvariant);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(initialState) {
    //initialize store with state
    return (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxImmutableStateInvariant2.default)()));
}

//# sourceMappingURL=configureStore-compiled.js.map