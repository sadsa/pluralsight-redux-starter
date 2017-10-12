import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

const propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

class ManageCoursePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: Object.assign({}, props.course),
      errors: { title: null }
    };
  }

  render() {
    return (
      <div>
        <h1>Manage Course</h1>
        <CourseForm
          allAuthors={this.props.authors}
          course={this.state.course}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = propTypes;

function mapStateToProps (state, ownProps) {
  let course = {id: '', title: '', watchHref: '', authorId: '', length: '', category: ''};
  const authors = authorsFormattedForDropdown(state.authors);

  return {
    course: course,
    authors: authors
  };

  function authorsFormattedForDropdown (authors) {
    return authors.map(author => ({
      value: author.id,
      text: `${author.firstName} ${author.lastName}`
    }));
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
