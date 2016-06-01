'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CourseListRow = function CourseListRow(_ref) {
    var course = _ref.course;

    return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
                'a',
                { href: course.watchHref, target: '_blank' },
                'Watch'
            )
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
                _reactRouter.Link,
                { to: '/course/' + course.id },
                course.title
            )
        ),
        _react2.default.createElement(
            'td',
            null,
            course.authorId
        ),
        _react2.default.createElement(
            'td',
            null,
            course.category
        ),
        _react2.default.createElement(
            'td',
            null,
            course.length
        )
    );
};

CourseListRow.propTypes = {
    course: _react.PropTypes.object.isRequired
};

exports.default = CourseListRow;

//# sourceMappingURL=CourseListRow-compiled.js.map