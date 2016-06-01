import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);


        // bind context of event handlers to this object.
        // It's best to do this in the constructor rather than on the render function in order to avoid repeated function creations after every change

        //this.onClickSave = this.onClickSave.bind(this);
        //this.onTitleChange = this.onTitleChange.bind(this);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);

    }


    courseRow(course, index) {
        return <li key={index}>{course.title}</li>;
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                    value="Add Course"
                       className="btn btn-primary"
                       onClick={this.redirectToAddCoursePage} />
                <ul>
                    <CourseList courses={courses} />
                </ul>

            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: React.PropTypes.array.isRequired,
    //dispatch: React.PropTypes.func.isRequired, // will only be added if mapDispatchToProps is omitted from connect
    actions: React.PropTypes.object.isRequired
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
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); // if we omit mapDispatchToProps, we let connect inject a default dispatch function to our component's props
