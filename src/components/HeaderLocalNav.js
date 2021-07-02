import React from 'react';
import { Link } from 'gatsby';
import NavDropdown from './NavDropdown';

const HeaderLocalNav = function (props) {
  // console.log(props)
  return (
    <div className="vmv-header__local-nav">
      <Link to="/">Home</Link>
      <Link to="/about-us/">About Us</Link>
      <Link to="/wines/">Wines</Link>
      <NavDropdown label="Visit">
        <li>
          <Link to="/tastings/">The Wine Experience</Link>
        </li>
        <li>
          <Link to="/tours/">Tours</Link>
        </li>
      </NavDropdown>
      <NavDropdown label="Events">
        <li>
          <Link to="/private-gatherings/">Private Gatherings</Link>
        </li>
        <li>
          <Link to="/upcoming-events/">Upcoming Events</Link>
        </li>
        <li>
          <Link to="/weddings/">Weddings</Link>
        </li>
      </NavDropdown>
      <Link to="/contact-us/">Contact Us</Link>
    </div>
  )
}


export default HeaderLocalNav

