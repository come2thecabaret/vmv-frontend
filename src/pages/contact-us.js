import * as React from "react"
import { Header } from "../components/Header"
import "../styles.scss"
import { FeatureHeader } from "../components/FeatureHeader";
import { FeatureHero } from "../components/FeatureHero";
import { HorizontalDivider } from "../components/HorizontalDivider";
import ContactUsHero from "../images/vmv-road-sign.webp";


const ContactUs = (props) => {
  return (
    <main>
      <title>Contact Us</title>
      <Header currentPath={props.path}></Header>
      <FeatureHeader title="Contact Us"></FeatureHeader>
      <FeatureHero image={ContactUsHero}></FeatureHero>
      <div className="placeholder">
        <p>
          We are always happy to hear from you!  If you need to contact us, please fill out the following information and we will get back to you as soon as possible.
        </p>
        <p>
          You may also contact us at:
        </p>
        <ul>
          <li>info@vmvines.com</li>
          <li>send us a message on Facebook</li>
          <li>Call us at (540) 473-2979</li>
        </ul>
        <p>FORM</p>
      </div>

    </main>
  )
}

export default ContactUs
