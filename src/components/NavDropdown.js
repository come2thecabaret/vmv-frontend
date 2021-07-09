import React, { useState } from 'react';
import { Link } from 'gatsby';

const NavDropdown = function (props) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const setDropdownState = () => {
    if (dropdownIsOpen) {
      setDropdownIsOpen(false)
    } else if (!dropdownIsOpen) {
      setDropdownIsOpen(true)
    }
  }
  return (
    <>
      <div className="navbar__dropdown">
        <div className={`navbar__dropdown-label link ${dropdownIsOpen}`} onClick={() => setDropdownState()}>{props.label}</div>
        <ul className={"navbar__dropdown-children"}>
          {props.children}
        </ul>
      </div>
    </>
  )
}


export default NavDropdown

