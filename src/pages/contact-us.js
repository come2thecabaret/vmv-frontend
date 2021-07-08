import * as React from "react"
import Header from "../components/Header"
import FeatureHeader from "../components/FeatureHeader";
import FeatureHero from "../components/FeatureHero";
import HorizontalDivider from "../components/HorizontalDivider";
import ContactUsHero from "../images/vmv-road-sign.webp";
import Layout from "../components/layout"


const ContactUs = (props) => {
  return (
    <>
      <title>Contact Us</title>
      {/* <Layout location={props.path} headerType="regular"> */}
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
        <div><strong>FORM</strong></div>
      </div>

      {/* </Layout> */}
    </>
  )
}

export default ContactUs
