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

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    HomePage: {
        displayName: 'HomePage'
    }
};

var _UsersRafaeltikvaPycharmProjectsPluralsightReduxStarterNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/rafaeltikva/PycharmProjects/pluralsight-redux-starter/src/components/home/HomePage.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersRafaeltikvaPycharmProjectsPluralsightReduxStarterNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/rafaeltikva/PycharmProjects/pluralsight-redux-starter/src/components/home/HomePage.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersRafaeltikvaPycharmProjectsPluralsightReduxStarterNode_modulesReactTransformHmrLibIndexJs2(_UsersRafaeltikvaPycharmProjectsPluralsightReduxStarterNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var HomePage = _wrapComponent('HomePage')(function (_React$Component) {
    _inherits(HomePage, _React$Component);

    function HomePage() {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(HomePage).apply(this, arguments));
    }

    _createClass(HomePage, [{
        key: 'render',
        value: function render() {
            return _react3.default.createElement(
                'div',
                { className: 'jumbotron' },
                _react3.default.createElement(
                    'h1',
                    null,
                    'Pluralsight Administration'
                ),
                _react3.default.createElement(
                    'p',
                    null,
                    'React, Redux and React Router in ES6 for ultra-responsive web apps.'
                ),
                _react3.default.createElement(
                    _reactRouter.Link,
                    { to: 'about', className: 'btn btn-primary btn-lg' },
                    'Learn More'
                )
            );
        }
    }]);

    return HomePage;
}(_react3.default.Component));

exports.default = HomePage;

//# sourceMappingURL=HomePage-compiled.js.map