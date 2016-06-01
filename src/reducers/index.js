/* The Root Reducer */
import {combineReducers} from 'redux';
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';

const rootReducer = combineReducers({
    courses: courseReducer,
     authors: authorReducer //ES6 short-hand property names syntax
});

export default rootReducer;