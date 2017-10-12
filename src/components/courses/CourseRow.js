import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const propTypes = {
  course: PropTypes.object.isRequired
};


const CourseRow = ({ course }) => (
  <tr>
    <td><a href={course.watchHref} target="_blank">Watch</a></td>
    <td><Link to={"/course/" + course.id}>{course.title}</Link></td>
    <td>{course.author}</td>
    <td>{course.category}</td>
    <td>{course.length}</td>
  </tr>
);


CourseRow.propTypes = propTypes;


export default CourseRow;
