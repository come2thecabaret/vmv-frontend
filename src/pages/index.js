import * as React from "react"
import { Link } from "gatsby"
import { Header } from "../components/Header"
import { StaticImage } from 'gatsby-plugin-image';
import HeroImage from '../images/hero.webp'
import Logo from '../images/big-logo.inline.svg'
import "../styles.scss"
import QuickLinks from "../components/QuickLinks";
import Button from "../components/Button";
import WeddingsCarousel from "../components/WeddingsCarousel";


const IndexPage = (props) => {
  return (
    <main>
      <title>Home Page</title>
      <Header currentPath={props.path}></Header>
      <div className="vmv-hero" style={{ backgroundImage: `url(${HeroImage})` }}>
        <Logo />
      </div>
      <section className="tastings">
        <StaticImage className="tastings-img" layout="fullWidth" src="../images/tastings.png" alt="tastings pic" />
        <div className="tastings__text">
          <h2 className="spaced-bottom">The Wine Experience</h2>
          <div className="text-body-regular light">
            <p>Experiencing wine at Virginia Mountain Vineyards brings together the best that
              Virginia has to offer  -  panoramic views of the Blue Ridge Mountains and
              an exceptional wine tasting experience.</p>
            <p>Knowledgeable staff welcome you as a special guest and guide you through
              your wine tasting experience.</p>
            <p>There is truly a wine for every palate!</p>
          </div>
          <Link className="tastings__button" to="/tastings/">learn more +</Link>
        </div>
      </section>
      <QuickLinks></QuickLinks>
      <section className="tours">
        <StaticImage className="tours-img" layout="fullWidth" src="../images/tours.webp" alt="tastings pic" />
        <div className={'tours__text'}>
          <h2 className={'dark spaced-right tours__header'}>Tours</h2>
          <div className={'tours__text-body'}>
            <div className={'text-body-regular tours__blurb'}>
              Learning about the mystery of winemaking is one of the unique pleasures of visiting a
              winery.  At Virginia Mountain Vineyards, we provide tours of our vineyard and
              winemaking processes to enhance the wine tasting experience. The tours provide a glimpse
              into the magical journey of bringing science and art together to make great wine.
            </div>
            <Link className="tours__button" to="/tours/">learn more +</Link>
          </div>
        </div>
      </section>
      <section className={'weddings'}>
        <WeddingsCarousel></WeddingsCarousel>
        <div className={'weddings__text'}>
          <h2 className={'dark spaced-bottom'}>Weddings in the Vines</h2>
          <div className={'weddings__blurb text-body-regular'}>
            The natural beauty of Virginia Mountain Vineyards is what wedding dreams are made of.
            From an intimate wedding ceremony nestled in the grapevines to the glittering, vaulted
            wedding tent overlooking the panoramic view of the Blue Ridge Mountains, weddings at Virginia
            Mountain Vineyards are truly special and leave lasting memories for brides, grooms, and their guests!
          </div>
          <Link className="weddings__button" to="/weddings/">learn more +</Link>
        </div>
      </section>
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
            variant="secondary" />          </div>
      </section>
    </main>
  )
}

export default IndexPage
