'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CourseListRow = require('./CourseListRow');

var _CourseListRow2 = _interopRequireDefault(_CourseListRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CourseList = function CourseList(_ref) {
    var courses = _ref.courses;
    var deleteCourse = _ref.deleteCourse;

    return _react2.default.createElement(
        'table',
        { className: 'table' },
        _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    ' '
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Title'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Author'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Category'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Length'
                )
            )
        ),
        _react2.default.createElement(
            'tbody',
            null,
            courses.map(function (course) {
                return _react2.default.createElement(_CourseListRow2.default, { key: course.id, course: course });
            })
        )
    );
};

CourseList.propTypes = {
    courses: _react.PropTypes.array.isRequired,
    deleteCourse: _react.PropTypes.func
};

exports.default = CourseList;

//# sourceMappingURL=CourseList-compiled.js.map