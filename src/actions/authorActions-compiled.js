'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadAuthorsSuccess = loadAuthorsSuccess;
exports.loadAuthors = loadAuthors;

var _mockAuthorApi = require('../api/mockAuthorApi');

var _mockAuthorApi2 = _interopRequireDefault(_mockAuthorApi);

var _actionTypes = require('./actionTypes.js');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors: authors };
}

function loadAuthors() {
    return function (dispatch) {
        return _mockAuthorApi2.default.getAllAuthors().then(function (authors) {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(function (error) {
            throw error;
        });
    };
}

//# sourceMappingURL=authorActions-compiled.js.map