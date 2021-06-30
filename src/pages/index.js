import * as React from "react"
import { Link } from "gatsby"
import { Header } from "../components/Header"
import { StaticImage } from 'gatsby-plugin-image';
import HeroImage from '../images/hero.webp'
import Logo from '../images/big-logo.inline.svg'
import "../styles.scss"


const IndexPage = (props) => {
  return (
    <main>
      <title>Home Page</title>
      <Header currentPath={props.path}></Header>
      <div className="vmv-hero" style={{ backgroundImage: `url(${HeroImage})` }}>
        <Logo />
      </div>
      <div className="tastings">
        <StaticImage className="tastings-img" layout="fullWidth" src="../images/tastings.png" alt="tastings pic" />
        <div className="tastings__text">
          <div className="tastings__title">Tastings</div>
          <div className="tastings__blurb">
            <p>Wine Tasting at Virginia Mountain Vineyards brings together the best that
              Virginia has to offer  -  panoramic views of the Blue Ridge Mountains and
              an exceptional wine tasting experience.</p>
            <p>Knowledgeable staff welcome you as a special guest and guide you through
              your wine tasting experience.</p>
            <p>There is truly a wine for every palate!</p>
          </div>
          <Link className="tastings__button" to="/tastings/">learn more +</Link>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
