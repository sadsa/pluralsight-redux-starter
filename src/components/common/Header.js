import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => (
  <div>
    <IndexLink to="/" activeClassName="active">Home</IndexLink>
    {" | "}
    <Link to="/courses" activeClassName="active">Courses</Link>
    {" | "}
    <Link to="/about" activeClassName="active">About</Link>
  </div>
);

export default Header;
