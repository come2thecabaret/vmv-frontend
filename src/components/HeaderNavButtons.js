import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Button from './Button'


const HeaderNavButtons = function (props) {
  // set button css class name from prop: variant

  return (
    <div className="vmv-header__nav-buttons">
      <a href="https://www.facebook.com/VirginiaMountainVineyards/" title="Keep in touch on our VMV Facebook page" target="_blank">
        <FontAwesomeIcon icon={faFacebookSquare} size="2x" color="#0E0A0A" />
      </a>
      {/* <a href="https://twitter.com/vamtvineyards" title="Follow VMV on Twitter" target="_blank">
        <FontAwesomeIcon icon={faTwitterSquare} size="2x" color="#0E0A0A" />
      </a> */}
      <a href="https://www.instagram.com/vamtvineyards/" title="Check out the latest pictures on the VMV Instagram" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="2x" color="#0E0A0A" />
      </a>
      <Button
        label="Shop"
        link="#"
        hoverText="Shop our wines from the comfort of your own home"
        variant="primary" />
    </div>
  )
}


export default HeaderNavButtons

