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

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _courseActions = require('../../actions/courseActions');

var courseActions = _interopRequireWildcard(_courseActions);

var _CourseList = require('./CourseList');

var _CourseList2 = _interopRequireDefault(_CourseList);

var _reactRouter = require('react-router');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    CoursesPage: {
        displayName: 'CoursesPage'
    }
};

var _UsersRafaeltikvaPycharmProjectsPluralsightReduxStarterNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/rafaeltikva/PycharmProjects/pluralsight-redux-starter/src/components/course/CoursesPage.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersRafaeltikvaPycharmProjectsPluralsightReduxStarterNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/rafaeltikva/PycharmProjects/pluralsight-redux-starter/src/components/course/CoursesPage.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersRafaeltikvaPycharmProjectsPluralsightReduxStarterNode_modulesReactTransformHmrLibIndexJs2(_UsersRafaeltikvaPycharmProjectsPluralsightReduxStarterNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var CoursesPage = _wrapComponent('CoursesPage')(function (_React$Component) {
    _inherits(CoursesPage, _React$Component);

    function CoursesPage(props, context) {
        _classCallCheck(this, CoursesPage);

        // bind context of event handlers to this object.
        // It's best to do this in the constructor rather than on the render function in order to avoid repeated function creations after every change

        //this.onClickSave = this.onClickSave.bind(this);
        //this.onTitleChange = this.onTitleChange.bind(this);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CoursesPage).call(this, props, context));

        _this.redirectToAddCoursePage = _this.redirectToAddCoursePage.bind(_this);

        return _this;
    }

    _createClass(CoursesPage, [{
        key: 'courseRow',
        value: function courseRow(course, index) {
            return _react3.default.createElement(
                'li',
                { key: index },
                course.title
            );
        }
    }, {
        key: 'redirectToAddCoursePage',
        value: function redirectToAddCoursePage() {
            _reactRouter.browserHistory.push('/course');
        }
    }, {
        key: 'render',
        value: function render() {
            var courses = this.props.courses;

            return _react3.default.createElement(
                'div',
                null,
                _react3.default.createElement(
                    'h1',
                    null,
                    'Courses'
                ),
                _react3.default.createElement('input', { type: 'submit',
                    value: 'Add Course',
                    className: 'btn btn-primary',
                    onClick: this.redirectToAddCoursePage }),
                _react3.default.createElement(
                    'ul',
                    null,
                    _react3.default.createElement(_CourseList2.default, { courses: courses })
                )
            );
        }
    }]);

    return CoursesPage;
}(_react3.default.Component));

CoursesPage.propTypes = {
    courses: _react3.default.PropTypes.array.isRequired,
    //dispatch: React.PropTypes.func.isRequired, // will only be added if mapDispatchToProps is omitted from connect
    actions: _react3.default.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
    // the courses property name is what will be added to the component's props
    // the state.courses (the value) is the property we created in our reducer
}

function mapDispatchToProps(dispatch) {
    return {
        //createCourse: course => dispatch(courseActions.createCourse(course))
        actions: (0, _redux.bindActionCreators)(courseActions, dispatch)
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CoursesPage); // if we omit mapDispatchToProps, we let connect inject a default dispatch function to our component's props

//# sourceMappingURL=CoursesPage-compiled.js.map