import * as React from "react"
import { Header } from "../components/Header"
import "../styles.scss"
import { FeatureHeader } from "../components/FeatureHeader";
import { FeatureHero } from "../components/FeatureHero";
import { HorizontalDivider } from "../components/HorizontalDivider";


const UpcomingEvents = (props) => {
  return (
    <main>
      <title>Tastings at Virginia Mountain Vineyards</title>
      <Header currentPath={props.path}></Header>
      <FeatureHeader title="Upcoming Events"></FeatureHeader>
      <div className="placeholder">
        <p>
          need intro text to go above calendar
        </p>
      </div>

    </main>
  )
}

export default UpcomingEvents
