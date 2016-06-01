'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createCourse = createCourse;
exports.loadCoursesSuccess = loadCoursesSuccess;
exports.updateCourseSuccess = updateCourseSuccess;
exports.saveCourseSuccess = saveCourseSuccess;
exports.loadCourses = loadCourses;
exports.saveCourse = saveCourse;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _mockCourseApi = require('../api/mockCourseApi');

var _mockCourseApi2 = _interopRequireDefault(_mockCourseApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createCourse(course) {
    return {
        type: types.CREATE_COURSE,
        course: course // ES6 syntax - in case the object property name is the same as the value. i.e course: course
    };
}

function loadCoursesSuccess(courses) {
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses: courses
    };
}

function updateCourseSuccess(course) {
    return {
        type: types.UPDATE_COURSE_SUCCESS,
        course: course
    };
}

function saveCourseSuccess(course) {
    return {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
    };
}

function loadCourses() {
    return function (dispatch) {
        // thunk
        return _mockCourseApi2.default.getAllCourses().then(function (courses) {
            dispatch(loadCoursesSuccess(courses));
        }).catch(function (error) {
            console.error("An error occured:", error);
            throw error;
        });
    };
}

function saveCourse(course) {
    return function (dispatch, getState) {
        // thunk
        return _mockCourseApi2.default.saveCourse(course).then(function (savedCourse) {

            console.log('returned course:', savedCourse);
            course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(saveCourseSuccess(savedCourse));
            console.log('course dispatched', savedCourse);
        }).catch(function (error) {
            console.error("An error occured:", error);
            //throw(error);
        });
    };
}

//# sourceMappingURL=courseActions-compiled.js.map