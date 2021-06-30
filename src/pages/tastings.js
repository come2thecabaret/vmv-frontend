import * as React from "react"
import { Header } from "../components/Header"
import "../styles.scss"
import { FeatureHeader } from "../components/FeatureHeader";
import { FeatureHero } from "../components/FeatureHero";
import { HorizontalDivider } from "../components/HorizontalDivider";


const TastingsPage = (props) => {
  return (
    <main>
      <title>Tastings at Virginia Mountain Vineyards</title>
      <Header currentPath={props.path}></Header>
      <FeatureHeader title="Tastings"></FeatureHeader>
      <FeatureHero></FeatureHero>
      <h1 className={'dark center spaced'}>Tastings at VMV</h1>
      <div className={'text-subheading'}>Virginia Mountain Vineyards staff work hard to create the best wine tasting experience with great seating, breath-taking views, and expert knowledge of our wines.</div>
      <HorizontalDivider></HorizontalDivider>
      <p className="text-body-highimpact">In accordance with Virginia health guidelines, our Tasting Room guests will continue to be seated outdoors and are served by our Tasting Room staff.  Rather than traditional tastings, our guests can choose between Wine Flights (choice of any 4 wines) or Wine and Chocolate Pairings.  Guests can enjoy their Wine Flights or Wine and Chocolate Pairings in comfortable seating  -  all with magnificent views!</p>
      <p className="text-body-highimpact">Because we only have outdoor seating, the Tasting Room is only open for curbside pickup on Friday and Saturday Afternoons during winter months.  As soon as it gets warm enough to sit outside, we will re-open the Tasting Room for outdoor seating.</p>
      <HorizontalDivider></HorizontalDivider>
    </main>
  )
}

export default TastingsPage
