import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';


const propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func,
  onChange: PropTypes.func,
  loading: PropTypes.bool,
  errors: PropTypes.object
};


const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => (
  <form>

    <TextInput
      name="title"
      label="Title"
      value={course.title}
      onChange={onChange}
      error={errors.title} />

    <SelectInput
      name="authorId"
      label="Author"
      value={course.authorId}
      defaultOption="Select Author"
      options={allAuthors}
      onChange={onChange}
      error={errors.authorId} />

    <TextInput
      name="category"
      label="Category"
      value={course.category}
      onChange={onChange}
      error={errors.category} />

    <TextInput
      name="length"
      label="Length"
      value={course.length}
      onChange={onChange}
      error={errors.length} />

    <input
      type="submit"
      disabled={loading}
      value={loading ? 'Saving...': 'Save'}
      className="btn btn-primary"
      onClick={onSave} />

  </form>
);


CourseForm.propTypes = propTypes;


export default CourseForm;
