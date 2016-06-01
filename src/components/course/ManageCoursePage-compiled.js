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

var _CourseForm = require('./CourseForm');

var _CourseForm2 = _interopRequireDefault(_CourseForm);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    ManageCoursePage: {
        displayName: 'ManageCoursePage'
    }
};

var _UsersRafaeltikvaPycharmProjectsPluralsightReduxStarterNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/rafaeltikva/PycharmProjects/pluralsight-redux-starter/src/components/course/ManageCoursePage.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersRafaeltikvaPycharmProjectsPluralsightReduxStarterNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/rafaeltikva/PycharmProjects/pluralsight-redux-starter/src/components/course/ManageCoursePage.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersRafaeltikvaPycharmProjectsPluralsightReduxStarterNode_modulesReactTransformHmrLibIndexJs2(_UsersRafaeltikvaPycharmProjectsPluralsightReduxStarterNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var ManageCoursePage = _wrapComponent('ManageCoursePage')(function (_React$Component) {
    _inherits(ManageCoursePage, _React$Component);

    function ManageCoursePage(props, context) {
        _classCallCheck(this, ManageCoursePage);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ManageCoursePage).call(this, props));

        _this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        };
        // update contexts of event handlers
        _this.updateCourseState = _this.updateCourseState.bind(_this);
        _this.saveCourse = _this.saveCourse.bind(_this);
        return _this;
    }

    _createClass(ManageCoursePage, [{
        key: 'updateCourseState',
        value: function updateCourseState(event) {
            var field = event.target.name;
            var course = this.state.course;
            course[field] = event.target.value;
            return this.setState({ course: course });
        }
    }, {
        key: 'saveCourse',
        value: function saveCourse(event) {
            event.preventDefault();
            console.log("The course: ", this.state.course);
            this.props.actions.saveCourse(this.state.course);
            console.log("Course saved");
        }
    }, {
        key: 'render',
        value: function render() {
            return _react3.default.createElement(_CourseForm2.default, {
                allAuthors: this.props.authors,
                onChange: this.updateCourseState,
                onSave: this.saveCourse,
                course: this.state.course,
                errors: this.state.errors
            });
        }
    }]);

    return ManageCoursePage;
}(_react3.default.Component));

ManageCoursePage.propTypes = {
    course: _react2.PropTypes.object.isRequired,
    authors: _react2.PropTypes.array.isRequired,
    actions: _react2.PropTypes.object.isRequired

};

function mapStateToProps(state, ownProps) {
    var course = { id: '', title: '', authorId: '', length: '', category: '' };

    var authorsFormattedForDropdown = state.authors.map(function (author) {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(courseActions, dispatch)
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

//# sourceMappingURL=ManageCoursePage-compiled.js.map