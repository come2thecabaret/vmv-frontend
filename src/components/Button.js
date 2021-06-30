import React from 'react';
import PropTypes from 'prop-types';

const Button = function (props) {
  // set button css class name from prop: variant
  let buttonClass = 'vmv-button';
  if (props.variant === 'primary') {
    buttonClass = 'vmv-button--primary';
  } else if (props.variant === 'secondary') {
    buttonClass = 'vmv-button--secondary'
  }
  return (
    <a href={props.link} className={buttonClass} title={props.hoverText}>{props.label}</a>
  )
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hoverText: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
}

export default Button

