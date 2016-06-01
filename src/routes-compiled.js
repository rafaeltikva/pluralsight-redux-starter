'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _HomePage = require('./components/home/HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

var _AboutPage = require('./components/about/AboutPage');

var _AboutPage2 = _interopRequireDefault(_AboutPage);

var _CoursesPage = require('./components/course/CoursesPage');

var _CoursesPage2 = _interopRequireDefault(_CoursesPage);

var _ManageCoursePage = require('./components/course/ManageCoursePage');

var _ManageCoursePage2 = _interopRequireDefault(_ManageCoursePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _App2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomePage2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'about', component: _AboutPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'courses', component: _CoursesPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'course', component: _ManageCoursePage2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'course/:id', component: _ManageCoursePage2.default })
);

//# sourceMappingURL=routes-compiled.js.map