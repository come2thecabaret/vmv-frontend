import * as React from "react"
import { Link } from "gatsby"
import { Header } from "../components/Header"
import { StaticImage } from 'gatsby-plugin-image';
import HeroImage from '../images/hero.webp'
import Logo from '../images/big-logo.inline.svg'
import "../styles.scss"
import QuickLinks from "../components/QuickLinks";


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
          <h2 className="">Tastings</h2>
          <div className="text-body-regular light">
            <p>Wine Tasting at Virginia Mountain Vineyards brings together the best that
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
          <h2 className={'dark spaced-right'}>Tours</h2>
          <div className={'tours__text-body'}>
            <div className={'text-body-regular tours__blurb'}>Learning about the mystery of winemaking is one of the unique pleasures of visiting a winery.  At Virginia Mountain Vineyards, we provide tours of our vineyard and winemaking processes to enhance the wine tasting experience and provide a glimpse into the magical journey of bringing science and art together to make great wine.</div>
            <Link className="tours__button" to="/tours/">learn more +</Link>
          </div>
        </div>
      </section>
      <section className={'weddings'}>
        <div className={'weddings__photobook'}>
          <div className={'weddings__photobook-frame'}></div>
        </div>
        <div className={'weddings__text'}>
          <h2 className={'dark'}>Weddings at VMV</h2>
          <div className={'weddings__blurb text-body-regular'}>
            The natural beauty of Virginia Mountain Vineyards is what wedding dreams are made of. From an intimate wedding ceremony nestled in the grapevines to the glittering, vaulted wedding tent overlooking the panoramic view of the Blue Ridge Mountains, weddings at Virginia Mountain Vineyards are truly special and leave lasting memories for brides, grooms and their guests!
          </div>
          <Link className="weddings__button" to="/tours/">learn more +</Link>
        </div>
      </section>
    </main>
  )
}

export default IndexPage
