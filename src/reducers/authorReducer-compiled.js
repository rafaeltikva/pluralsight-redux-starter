'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = authorReducer;

var _actionTypes = require('../actions/actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _initialState = require('./initialState');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function authorReducer() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.authors : arguments[0];
    var action = arguments[1];
    // pure function - returns a new state from input state
    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            return state;
    }
}

//# sourceMappingURL=authorReducer-compiled.js.map