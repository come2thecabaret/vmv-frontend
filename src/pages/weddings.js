import * as React from "react"
import Header from "../components/Header"
import FeatureHeader from "../components/FeatureHeader";
import FeatureHero from "../components/FeatureHero";
import HorizontalDivider from "../components/HorizontalDivider";
import Layout from "../components/layout"


const Weddings = (props) => {
  return (
    <>
      <title>About Us</title>
      {/* <Layout location={props.path} headerType="regular"> */}
      <FeatureHeader title="Weddings"></FeatureHeader>
      <div><strong>need hero image</strong></div>
      <div className="placeholder">
        <p>
          Many dream of having their wedding in a vineyard!  Virginia Mountain
          Vineyards can make that dream come true.
        </p>
        <p>Our vineyard offers a gorgeous,
          outdoor chapel setting surrounded by grapevines and lined with our famous
          red rose bushes.  Our reception venue is a wonderful, large stone patio
          covered by a tri-peaked white tent.  The impressive panoramic views of
          the Blue Ridge Mountains from our Event Center and the elegance of the
          beautiful chandeliers under our tent deliver a dreamy and romantic experience
          for brides, grooms, and guests.
        </p>
        <p>
          We would love to work with you to create the wedding of your dreams!
          To get more information about planning your wedding at Virginia Mountain
          Vineyards, download a brochure below. Or, if you are ready to schedule a visit,
          please fill out the following contact form and we will be in touch with you as quickly as possible.
        </p>
        <button>(button to download brochure)</button>
        <div><strong>wedding intake/interest form</strong></div>
        <div><strong>pics/mosaic/gallery?</strong></div>
      </div>

      {/* </Layout> */}
    </>
  )
}

export default Weddings
