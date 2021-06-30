import React from 'react';
import { Link } from 'gatsby';
import NavDropdown from './NavDropdown';

const HeaderLocalNav = function (props) {
  return (
    <div className="vmv-header__local-nav">
      <Link to="/">Home</Link>
      <Link to="/">About Us</Link>
      <Link to="/">Wines</Link>
      <NavDropdown label="Visit"></NavDropdown>
      <Link to="/">Events</Link>
      <Link to="/">Contact Us</Link>
    </div>
  )
}


export default HeaderLocalNav

