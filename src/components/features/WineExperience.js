import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"

const WineExperienceFeature = (props) => {
  return (
    <section className="tastings">
      <StaticImage className="tastings-img" layout="fullWidth" src="../../images/tastings.png" alt="tastings pic" />
      <div className="tastings__text">
        <h2 className="spaced-bottom">The Wine Experience</h2>
        <div className="text-body-regular light">
          <p className={''}>Experiencing wine at Virginia Mountain Vineyards brings together the best that
            Virginia has to offer  -  panoramic views of the Blue Ridge Mountains and
            an exceptional wine tasting experience.</p>
          <p>Knowledgeable staff welcome you as a special guest and guide you through
            your wine tasting experience.</p>
          <p>There is truly a wine for every palate!</p>
        </div>
        <Link className="tastings__button" to="/tastings/">learn more +</Link>
      </div>
    </section>
  )
}

export default WineExperienceFeature
