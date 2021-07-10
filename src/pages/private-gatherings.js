import * as React from "react"
import Header from "../components/Header"
import FeatureHeader from "../components/FeatureHeader";
import FeatureHero from "../components/FeatureHero";
import HorizontalDivider from "../components/HorizontalDivider";
import PrivateGatheringsHero from "../images/private-gatherings.webp";
import Layout from "../components/layout"
import PrivateGatheringsSmall from "../images/private-gatherings-table.jpg";


const PrivateGatherings = (props) => {
  return (
    <>
      <title>Tastings at Virginia Mountain Vineyards</title>
      {/* <Layout location={props.path} headerType="regular"> */}
      <FeatureHeader title="Private Gatherings"></FeatureHeader>
      <FeatureHero image={PrivateGatheringsHero}></FeatureHero>
      <div className="text-subheading--small">
        Virginia Mountain Vineyards is a wonderful place to host your next party or
        private gathering.  Helping to realize your dream event is our goal!
      </div>
      <div className="text-subheading--big">
        <p>
          We have a wonderful <strong>Event Center</strong> to host both small and large gatherings.
          Whether you are celebrating personal milestones like birthdays or anniversaries
          or business events celebrating retirements or holiday parties, Virginia Mountain
          Vineyards can provide a gorgeous venue with <strong>panoramic mountain views</strong> in a pastoral
          setting.
        </p>
      </div>
      <div className="l-two-column">
        <p>
          Our Event Center is a <strong>large, tri-peaked tent (80 feet by 40 feet)</strong> on a <strong>stunning paved
            patio</strong> featuring beautiful chandeliers and Edison lighting with lanterns surrounding the
          perimeter.  The tent is large enough to <strong>seat as many as 250 guests</strong>, however we can
          also create a <strong>small and intimate setting</strong> for special events or dinners.
        </p>
        <p>
          Although we do not provide catering ourselves, we are happy to work with any caterer
          you choose.  There are many wonderful local caterers, and we are more than happy to <strong>connect
            you with caterers</strong>  who have served wonderful events at our venue.  Of course, we can provide
          our award-winning wines for your guests to enjoy!
        </p>
        <p>
          We would love to be part of your next private gathering.  For more information, please
          contact us at info@vmvines.com or (540) 473-2979.
        </p>
      </div>
      <img src={PrivateGatheringsSmall} width="100%" height="auto" alt="Private Gatherings" />
    </>
  )
}

export default PrivateGatherings
