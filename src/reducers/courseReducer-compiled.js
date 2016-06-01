'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = courseReducer;

var _actionTypes = require('../actions/actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _initialState = require('./initialState');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function courseReducer() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.courses : arguments[0];
    var action = arguments[1];
    // pure function - returns a new state from input state
    console.log('The action type: ', action.type);
    switch (action.type) {
        case types.CREATE_COURSE:
            return [].concat(_toConsumableArray(state), [Object.assign({}, action.course)]);
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        case types.CREATE_COURSE_SUCCESS:
            console.log('updating store with new course', action.course);
            return [].concat(_toConsumableArray(state), [Object.assign({}.action.course)]);
        case types.UPDATE_COURSE_SUCCESS:
            return [].concat(_toConsumableArray(state.filter(function (course) {
                return course.id !== action.course.id;
            })), [Object.assign({}.action.course)]);
        default:
            return state;
    }
}

//# sourceMappingURL=courseReducer-compiled.js.map