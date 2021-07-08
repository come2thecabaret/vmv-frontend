import * as React from "react"
import Button from "../Button";
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"

const ViewsFeature = (props) => {
  return (
    <section className={'views'}>
      <h1 className={'views__header center dark'}>Exceptional wines. Breathtaking views.</h1>
      <div className={'views__buttons'}>
        <Button
          label="Our Story"
          link="/about-us/"
          hoverText="About us"
          variant="primary" />
        <Button
          label="Get in Touch"
          link="/contact-us/"
          hoverText="Contacr us"
          variant="secondary" />
      </div>
    </section>)
}
export default ViewsFeature


