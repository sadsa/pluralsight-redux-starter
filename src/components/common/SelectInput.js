import React, {PropTypes} from 'react';


const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.object,
  options: PropTypes.arrayOf(PropTypes.object)
};


const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control">
          <option value="">{defaultOption}</option>
          {options.map(option =>
            <option key={option.value} value={option.value}>{option.text}</option>
          )}
        </select>
        {error ? <span className="alert alert-danger">{error}</span> : ''}
      </div>
    </div>
  );
};


SelectInput.propTypes = propTypes;


export default SelectInput;
