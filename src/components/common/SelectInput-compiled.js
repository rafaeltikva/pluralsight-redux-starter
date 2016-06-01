"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectInput = function SelectInput(_ref) {
    var name = _ref.name;
    var label = _ref.label;
    var onChange = _ref.onChange;
    var defaultOption = _ref.defaultOption;
    var value = _ref.value;
    var error = _ref.error;
    var options = _ref.options;

    return _react2.default.createElement(
        "div",
        { className: "form-group" },
        _react2.default.createElement(
            "label",
            { htmlFor: name },
            label
        ),
        _react2.default.createElement(
            "div",
            { className: "field" },
            _react2.default.createElement(
                "select",
                {
                    name: name,
                    value: value,
                    onChange: onChange,
                    className: "form-control" },
                _react2.default.createElement(
                    "option",
                    { value: "" },
                    defaultOption
                ),
                options.map(function (option) {
                    return _react2.default.createElement(
                        "option",
                        { key: option.value, value: option.value },
                        option.text
                    );
                })
            ),
            error && _react2.default.createElement(
                "div",
                { className: "alert alert-danger" },
                error
            )
        )
    );
};

SelectInput.propTypes = {
    name: _react.PropTypes.string.isRequired,
    label: _react.PropTypes.string.isRequired,
    onChange: _react.PropTypes.func.isRequired,
    defaultOption: _react.PropTypes.string,
    value: _react.PropTypes.string,
    error: _react.PropTypes.string,
    options: _react.PropTypes.arrayOf(_react.PropTypes.object)
};

exports.default = SelectInput;

//# sourceMappingURL=SelectInput-compiled.js.map