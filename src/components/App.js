import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';


const propTypes = {
  children: PropTypes.object.isRequired
};


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}


App.propTypes = propTypes;


export default App;
