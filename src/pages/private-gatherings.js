import * as React from "react"
import Header from "../components/Header"
import FeatureHeader from "../components/FeatureHeader";
import FeatureHero from "../components/FeatureHero";
import HorizontalDivider from "../components/HorizontalDivider";
import PrivateGatheringsHero from "../images/private-gatherings.webp";
import Layout from "../components/layout"


const PrivateGatherings = (props) => {
  return (
    <>
      <title>Tastings at Virginia Mountain Vineyards</title>
      {/* <Layout location={props.path} headerType="regular"> */}
      <FeatureHeader title="Private Gatherings"></FeatureHeader>
      <FeatureHero image={PrivateGatheringsHero}></FeatureHero>
      <div className="placeholder">
        <p>
          Virginia Mountain Vineyards is a wonderful place to host your next party or
          private gathering.  Helping you realize your dream event is our goal!
        </p>
        <p>
          We have a wonderful Event Center to host both small and large gatherings.
          Whether you are celebrating personal milestones like birthdays or anniversaries
          or business events celebrating retirements or holiday parties, Virginia Mountain
          Vineyards can provide a gorgeous venue with panoramic mountain views in a pastoral
          setting.
        </p>
        <p>
          Our Event Center is a large, tri-peaked tent (80 feet by 40 feet) on a stunning paved
          patio featuring beautiful chandeliers and Edison lighting with lanterns surrounding the
          perimeter.  The tent is large enough to seat as many as 250 guests, however we can
          also create a small and intimate setting for special events or dinners.
        </p>
        <p>
          Although we do not provide catering ourselves, we are happy to work with any caterer
          you choose.  There are many wonderful local caterers, and we are more than happy to connect
          you with caterers  who have served wonderful events at our venue.  Of course, we can provide
          our award-winning wines for your guests to enjoy!
        </p>
        <p>
          We would love to be part of your next private gathering.  For more information, please
          contact us at info@vmvines.com or (540) 473-2979.
        </p>
      </div>

      {/* </Layout> */}
    </>
  )
}

export default PrivateGatherings
