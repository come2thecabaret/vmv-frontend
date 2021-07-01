import * as React from "react"
import { Header } from "../components/Header"
import "../styles.scss"
import { FeatureHeader } from "../components/FeatureHeader";
import { FeatureHero } from "../components/FeatureHero";
import { HorizontalDivider } from "../components/HorizontalDivider";


const Weddings = (props) => {
  return (
    <main>
      <title>About Us</title>
      <Header currentPath={props.path}></Header>
      <FeatureHeader title="About Us"></FeatureHeader>
      <div className="placeholder">
        <p>
          Many dream of having their wedding in a vineyard!  Virginia Mountain Vineyards can make that dream come true.  Our vineyard offers a gorgeous, outdoor chapel setting surrounded by grapevines and lined with our famous red rose bushes.  Our reception venue is a wonderful, large stone patio covered by a tri-peaked white tent.  The impressive panoramic views of the Blue Ridge Mountains from our Event Center and the elegance of the beautiful chandeliers under our tent deliver a dreamy and romantic experience for brides, grooms, and guests.
        </p>
        <p>We would love to work with you to create the wedding of your dreams!  To get more information about planning your wedding at Virginia Mountain Vineyards, request a brochure below.</p>
        <button>(button to download brochure)</button>
      </div>

    </main>
  )
}

export default Weddings
