import * as React from "react"
import { Header } from "../components/Header"
import "../styles.scss"
import { FeatureHeader } from "../components/FeatureHeader";
import { FeatureHero } from "../components/FeatureHero";
import { HorizontalDivider } from "../components/HorizontalDivider";
import TastingsHero from '../images/tastings-hero.webp'


const TastingsPage = (props) => {
  return (
    <main>
      <title>Tastings at Virginia Mountain Vineyards</title>
      <Header currentPath={props.path}></Header>
      <FeatureHeader title="The Wine Experience"></FeatureHeader>
      <FeatureHero image={TastingsHero}></FeatureHero>
      {/* <h1 className={'dark center spaced'}>The Wine Experience</h1> */}
      <div className={'text-subheading'}>
        Virginia Mountain Vineyards staff work hard to create the best wine
        experience with great seating, breath-taking views, and expert knowledge of our wines.</div>
      <HorizontalDivider></HorizontalDivider>
      <p className="text-body-highimpact">
        Our guests can choose between Wine Flights (choice of any 4 wines) or Wine and Chocolate Pairings.
        Guests can enjoy their wine in comfortable, outdoor seating  -  all with magnificent mountain views.</p>
      {/* <p className="text-body-highimpact">
        Because we only have outdoor seating, the Tasting Room is only open for curbside 
        pickup on Friday and Saturday Afternoons during winter months.  As soon as it gets 
        warm enough to sit outside, we will re-open the Tasting Room for outdoor seating.</p> */}
      <HorizontalDivider></HorizontalDivider>
      <div className="placeholder">
        <p>
          Wine tasting is one of the most unique and enjoyable experiences.  Tasting award-winning wine in a gorgeous mountain-view setting with friends is truly sublime.  Your experience at Virginia Mountain Vineyards will include access to our best wines in a relaxed, outdoor setting.
        </p>
        <p>
          To make your wine tasting experience perfect, we also offer some food elections.  We have wonderful cheese selections produced by a local dairy farm and our special wine and chocolate pairings.  You are also welcome to bring a picnic to enjoy with our wines.
        </p>
        <p>
          When you visit Virginia Mountain Vineyards, you will find a family-friendly environment with activities both adults and children will enjoy including ping pong, foosball, and corn hole.  We also welcome friendly dogs who usually love our beautiful and open pastoral fields.  All we ask is that you clean up after your pet to keep our grounds clean for everyone.
        </p>
      </div>

    </main>
  )
}

export default TastingsPage
