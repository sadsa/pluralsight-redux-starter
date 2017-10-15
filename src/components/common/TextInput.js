import React, {PropTypes} from 'react';


const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.object
};


const TextInput = ({name, label, onChange, value, placeholder, error}) => {
  let wrapperClass = 'form-group';
  if(error && error.length > 0) {
    wrapperClass += ' ' + ' has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          value={value}
          placeholder={placeholder}
          onChange={onChange}/>
        {error ? <span className="alert alert-danger">{error}</span> : ''}
      </div>
    </div>
  );
};


TextInput.propTypes = propTypes;


export default TextInput;
