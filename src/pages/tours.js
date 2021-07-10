import * as React from "react"
import Header from "../components/Header"
import FeatureHeader from "../components/FeatureHeader";
import FeatureHero from "../components/FeatureHero";
import HorizontalDivider from "../components/HorizontalDivider";
import Layout from "../components/layout"
import SkinnyBottle from '../images/skinny-bottle.jpg'


const Tours = (props) => {
  return (
    <>
      <title>Tours</title>
      {/* <Layout location={props.path} headerType="regular"> */}
      <FeatureHeader title="Tours"></FeatureHeader>
      <div className="tours-photo-grid">
        <div className="tours-photo-grid__item"></div>
        <div className="tours-photo-grid__item"></div>
        <div className="tours-photo-grid__item"></div>
      </div>
      <p className={'text-subheading'}>
        The vineyard is a magical place with each season bringing new and exciting developments for the grapevines.
      </p>
      <div className="tours-body">
        <div className="tours-body__image">
          <img src={SkinnyBottle} />
        </div>
        <div className="tours-body__text">
          <p>
            We are now offering a <strong>tour each weekend</strong>
            to bring our guests closer to the magic of the vineyard and the mysteries
            of the winemaking process.  Our tours help guests understand what it takes
            to go from vines to award-winning wines.  We love sharing our experiences
            and our passion  -  making great wine!</p>
          <p>Please check for <strong>dates and times on our Facebook page</strong> or contact us at
            info@vmvines.com or (540) 473-2979 to reserve your place on the Tour.
            If you do not have a reservation in advance, please check with us when
            you visit to see if we are conducting a Tour that day.  We would love
            to have you join us!</p>
        </div>
      </div>
    </>
  )
}

export default Tours
