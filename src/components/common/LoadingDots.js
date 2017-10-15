import React, {PropTypes} from 'react';
import ReactLoading from 'react-loading';


const propTypes = {
  type: PropTypes.string,
  color: PropTypes.string
};


const LoadingDots = ({ type = 'bubbles', color = '#000000' }) => (
  <div className="text-center">
    <ReactLoading
      type={type}
      color={color}
      style={
        {
          'margin' : '0 auto',
          'height' : '64px',
          'width' : '64px'
        }
      } />
  </div>
);


LoadingDots.propTypes = propTypes;


export default LoadingDots;

