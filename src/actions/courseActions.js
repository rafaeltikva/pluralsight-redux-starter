import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function createCourse(course) {
    return {
        type: types.CREATE_COURSE,
        course // ES6 syntax - in case the object property name is the same as the value. i.e course: course
    };
}

export function loadCoursesSuccess(courses) {
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses
    };
}

export function updateCourseSuccess(course) {
    return {
        type: types.UPDATE_COURSE_SUCCESS,
        course
    };
}

export function saveCourseSuccess(course) {
    return {
        type: types.CREATE_COURSE_SUCCESS,
        course
    };
}

export function loadCourses() {
    return function(dispatch) { // thunk
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            console.error("An error occured:", error);
            throw(error);
        });
    };
}


export function saveCourse(course) {
    return function(dispatch, getState) { // thunk
        return courseApi.saveCourse(course).then(savedCourse => {

            console.log('returned course:', savedCourse);
            course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(saveCourseSuccess(savedCourse));
            console.log('course dispatched', savedCourse);
        }).catch(error => {
            console.error("An error occured:", error);
            //throw(error);
        });
    };
}


