import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses , action) { // pure function - returns a new state from input state
    console.log('The action type: ', action.type);
    switch(action.type) {
        case types.CREATE_COURSE:
            return [...state, Object.assign({}, action.course)];
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        case types.CREATE_COURSE_SUCCESS:
            console.log('updating store with new course', action.course);
            return [...state, Object.assign({}. action.course)];
        case types.UPDATE_COURSE_SUCCESS:
            return [...state.filter(course => course.id !== action.course.id), Object.assign({}. action.course)];
        default:
            return state;
    }
}