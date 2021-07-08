import * as React from "react"
import Header from "../components/Header"
import FeatureHeader from "../components/FeatureHeader";
import FeatureHero from "../components/FeatureHero";
import HorizontalDivider from "../components/HorizontalDivider";
import Layout from "../components/layout"


const UpcomingEvents = (props) => {
  return (
    <>
      <title>Tastings at Virginia Mountain Vineyards</title>
      {/* <Layout location={props.path} headerType="regular"> */}
      <FeatureHeader title="Upcoming Events"></FeatureHeader>
      <div className="placeholder">
        <p>
          We continue to add new and exciting events to our calendar, from relaxing
          acoustic concerts to our popular yoga events. We are passionate about providing
          a beautiful setting to showcase local talent. Make sure to keep checking our Upcoming Events
          for some of the best local entertainment in Botetourt County.
        </p>
      </div>

      {/* </Layout> */}
    </>
  )
}

export default UpcomingEvents
