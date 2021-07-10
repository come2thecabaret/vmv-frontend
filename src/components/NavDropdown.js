import React, { useRef, useState, useEffect } from 'react';
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
  const node = useRef();
  useEffect(() => {
    // add when mounted
    if (dropdownIsOpen) {
      document.addEventListener("mousedown", handleClick);

    }
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click 
    setDropdownState(false);
  };
  return (
    <>
      <div className="navbar__dropdown">
        <div ref={node} className={`navbar__dropdown-label link ${dropdownIsOpen}`} onClick={() => setDropdownState()}>{props.label}</div>
        <ul className={"navbar__dropdown-children"}>
          {props.children}
        </ul>
      </div>
    </>
  )
}


export default NavDropdown

