import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"

const ToursFeature = (props) => {
  return (
    <section className="tours">
      <StaticImage className="tours-img" layout="fullWidth" src="../../images/tours.webp" alt="tastings pic" />
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
    </section>)
}

export default ToursFeature
