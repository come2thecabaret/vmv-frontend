import * as React from "react";
import Button from "./Button";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Logo from "../images/logo-white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  return (
    <section className={"footer"}>
      <div className={"footer-tagline"}>
        Exceptional wines. Breathtaking views.
      </div>
      {/* <div className={"views__buttons"}>
        <Button
          label="Our Story"
          link="/about-us/"
          hoverText="About us"
          variant="primary"
        />
        <Button
          label="Get in Touch"
          link="/contact-us/"
          hoverText="Contacr us"
          variant="secondary"
        />
      </div> */}
      <div className="footer-info">
        <div className="footer-info-box">
          <div className={"footer-address"}>
            4204 Old Fincastle Road
            <br />
            Fincastle, VA 24090
          </div>
          <div className={"footer-contact"}>
            540.473.2979
            <br />
            info@vmvines.com
          </div>
          <div className={"footer-social"}>
            <div className="vmv-header__nav-buttons">
              <a
                href="https://www.facebook.com/VirginiaMountainVineyards/"
                title="Keep in touch on our VMV Facebook page"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  size="2x"
                  color="white"
                />
              </a>
              {/* <a href="https://twitter.com/vamtvineyards" title="Follow VMV on Twitter" target="_blank">
        <FontAwesomeIcon icon={faTwitterSquare} size="2x" color="#0E0A0A" />
      </a> */}
              <a
                href="https://www.instagram.com/vamtvineyards/"
                title="Check out the latest pictures on the VMV Instagram"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
              {/* <Button
                label="Shop"
                link="#"
                hoverText="Shop our wines from the comfort of your own home"
                variant="primary"
              /> */}
            </div>
          </div>
        </div>
        <div className="footer-info-box">
          {/* <Logo /> */}
          <img src={Logo} className="footer-logo" alt="VMV Logo" />
          <label for="email-input">
            Join our mailing list:
            <input type="text" id="email-input" name="email-input" />
          </label>
        </div>
        <div className="footer-info-box">
          <div className="footer-info_hours-item">
            <div className="hours_item-day">Monday &amp; Tuesday:</div>
            <div className="hours_item-hours">Closed</div>
          </div>
          <div className="footer-info_hours-item">
            <div className="hours_item-day">Wednesday:</div>
            <div className="hours_item-hours">12 - 6PM</div>
          </div>
          <div className="footer-info_hours-item">
            <div className="hours_item-day">Thursday:</div>
            <div className="hours_item-hours">12 - 6PM</div>
          </div>
          <div className="footer-info_hours-item">
            <div className="hours_item-day">Friday:</div>
            <div className="hours_item-hours">12 - 6PM</div>
          </div>
          <div className="footer-info_hours-item">
            <div className="hours_item-day">Saturday:</div>
            <div className="hours_item-hours">12 - 6PM</div>
          </div>
          <div className="footer-info_hours-item">
            <div className="hours_item-day">Sunday:</div>
            <div className="hours_item-hours">12 - 6PM</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
