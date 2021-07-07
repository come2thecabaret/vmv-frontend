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
          We continue to add new and exciting events to our calendar, from relaxing
          acoustic concerts to our popular yoga events. We are passionate about providing
          a beautiful setting to showcase local talent. Make sure to keep checking our Upcoming Events
          for some of the best local entertainment in Botetourt County.
        </p>
      </div>

    </main>
  )
}

export default UpcomingEvents
