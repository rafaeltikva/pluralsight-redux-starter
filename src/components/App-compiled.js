'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('/Users/rafaeltikva/PycharmProjects/pluralsight-redux-starter/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/Users/rafaeltikva/PycharmProjects/pluralsight-redux-starter/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/Users/rafaeltikva/PycharmProjects/pluralsight-redux-starter/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Header = require('./common/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    App: {
        displayName: 'App'
    }
};

var _UsersRafaeltikvaPycharmProjectsPluralsightReduxStarterNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/rafaeltikva/PycharmProjects/pluralsight-redux-starter/src/components/App.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersRafaeltikvaPycharmProjectsPluralsightReduxStarterNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/rafaeltikva/PycharmProjects/pluralsight-redux-starter/src/components/App.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersRafaeltikvaPycharmProjectsPluralsightReduxStarterNode_modulesReactTransformHmrLibIndexJs2(_UsersRafaeltikvaPycharmProjectsPluralsightReduxStarterNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
} // This component handles the App template used on every page


var App = _wrapComponent('App')(function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            // children will be passed by React Router //
            return _react3.default.createElement(
                'div',
                { className: 'container-fluid' },
                _react3.default.createElement(_Header2.default, null),
                this.props.children
            );
        }
    }]);

    return App;
}(_react3.default.Component));

App.propTypes = {
    children: _react2.PropTypes.object.isRequired
};

exports.default = App;

//# sourceMappingURL=App-compiled.js.map