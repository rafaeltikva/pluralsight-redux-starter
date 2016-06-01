'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextInput = function TextInput(_ref) {
    var name = _ref.name;
    var label = _ref.label;
    var onChange = _ref.onChange;
    var placeholder = _ref.placeholder;
    var value = _ref.value;
    var error = _ref.error;

    var wrapperClass = 'form-group';
    if (error && error.length > 0) {
        wrapperClass += ' ' + 'has-error';
    }

    return _react2.default.createElement(
        'div',
        { className: wrapperClass },
        _react2.default.createElement(
            'label',
            { htmlFor: name },
            label
        ),
        _react2.default.createElement(
            'div',
            { className: 'field' },
            _react2.default.createElement('input', {
                type: 'text',
                name: name,
                className: 'form-control',
                placeholder: placeholder,
                value: value,
                onChange: onChange }),
            error && _react2.default.createElement(
                'div',
                { className: 'alert alert-danger' },
                error
            )
        )
    );
};

TextInput.propTypes = {
    name: _react.PropTypes.string.isRequired,
    label: _react.PropTypes.string.isRequired,
    onChange: _react.PropTypes.func.isRequired,
    placeholder: _react.PropTypes.string,
    value: _react.PropTypes.string,
    error: _react.PropTypes.string
};

exports.default = TextInput;

//# sourceMappingURL=TextInput-compiled.js.map