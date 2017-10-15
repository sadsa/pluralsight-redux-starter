import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import * as courseActions from '../../actions/courseActions';
import {browserHistory} from 'react-router';

const propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: '' }
    };

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage(event) {
    event.preventDefault();
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
          />
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = propTypes;

function mapStateToProps (state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
