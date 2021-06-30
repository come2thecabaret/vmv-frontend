import React from 'react';
import { Link } from 'gatsby';
import NavDropdown from './NavDropdown';

const HeaderLocalNav = function (props) {
  // console.log(props)
  return (
    <div className="vmv-header__local-nav">
      <Link to="/">Home</Link>
      <Link to="/">About Us</Link>
      <Link to="/">Wines</Link>
      <NavDropdown label="Visit">
        <li>
          <Link to="/">Tastings</Link>
        </li>
        <li>
          <Link to="/">Tours</Link>
        </li>
      </NavDropdown>
      <NavDropdown label="Events">
        <li>
          <Link to="/">Private Gatherings</Link>
        </li>
        <li>
          <Link to="/">Upcoming Events</Link>
        </li>
        <li>
          <Link to="/">Weddings</Link>
        </li>
      </NavDropdown>
      <Link to="/">Contact Us</Link>
    </div>
  )
}


export default HeaderLocalNav

