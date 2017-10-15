import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

const propTypes = {
  course: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

const contextTypes = {
  router: PropTypes.object
};

class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: { title: null },
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.course.id != nextProps.course.id) {
      return this.setState({ course: Object.assign({}, nextProps.course) });
    }
  }

  updateCourseState(event) {
    let field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({ course });
  }

  saveCourse(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({saving: false});
        toastr.error(error);
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Course Saved!');
    this.context.router.push('/courses');
  }

  render() {
    return (
      <div>
        <h1>Manage Course</h1>
        <CourseForm
          allAuthors={this.props.authors}
          onChange={this.updateCourseState}
          course={this.state.course}
          errors={this.state.errors}
          onSave={this.saveCourse}
          saving={this.state.saving}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = propTypes;
ManageCoursePage.contextTypes = contextTypes;

function authorsFormattedForDropdown (authors) {
  return authors.map(author => ({
    value: author.id,
    text: `${author.firstName} ${author.lastName}`
  }));
}

function getCourseById (courseId, courses) {
  return courses.find(course => course.id === courseId);
}

function mapStateToProps (state, ownProps) {
  let courseId = ownProps.params.id;
  let course = {id: '', title: '', watchHref: '', authorId: '', length: '', category: ''};
  const authors = authorsFormattedForDropdown(state.authors);

  if(courseId && state.courses.length > 0) {
    course = getCourseById(courseId, state.courses);
  }

  return {
    course: course,
    authors: authors
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
