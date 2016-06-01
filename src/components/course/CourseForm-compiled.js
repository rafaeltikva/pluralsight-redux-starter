'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextInput = require('../common/TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _SelectInput = require('../common/SelectInput');

var _SelectInput2 = _interopRequireDefault(_SelectInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CourseForm = function CourseForm(_ref) {
    var course = _ref.course;
    var allAuthors = _ref.allAuthors;
    var onSave = _ref.onSave;
    var onChange = _ref.onChange;
    var loading = _ref.loading;
    var errors = _ref.errors;

    return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'Manage Course'
        ),
        _react2.default.createElement(_TextInput2.default, {
            name: 'title',
            label: 'Title',
            value: course.title,
            onChange: onChange,
            error: errors.title
        }),
        _react2.default.createElement(_SelectInput2.default, {
            name: 'authorId',
            label: 'Author',
            value: course.authorId,
            defaultOption: 'Select Author',
            options: allAuthors,
            onChange: onChange, error: errors.authorId
        }),
        _react2.default.createElement(_TextInput2.default, {
            name: 'category',
            label: 'Category',
            value: course.category,
            onChange: onChange,
            error: errors.category
        }),
        _react2.default.createElement(_TextInput2.default, {
            name: 'length',
            label: 'Length',
            value: course.length,
            onChange: onChange,
            error: errors.length
        }),
        _react2.default.createElement('input', {
            type: 'submit',
            disabled: loading,
            value: loading ? 'Saving...' : 'Save',
            className: 'btn btn-primary',
            onClick: onSave
        })
    );
};

CourseForm.propTypes = {
    course: _react2.default.PropTypes.object.isRequired,
    allAuthors: _react2.default.PropTypes.array,
    onSave: _react2.default.PropTypes.func.isRequired,
    onChange: _react2.default.PropTypes.func.isRequired,
    loading: _react2.default.PropTypes.bool,
    errors: _react2.default.PropTypes.object

};

exports.default = CourseForm;

//# sourceMappingURL=CourseForm-compiled.js.map