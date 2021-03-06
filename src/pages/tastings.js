import * as React from "react"
import { Header } from "../components/Header"
import FeatureHeader from "../components/FeatureHeader";
import FeatureHero from "../components/FeatureHero";
import HorizontalDivider from "../components/HorizontalDivider";
import Layout from "../components/layout"
import TastingsHero from '../images/bottle-in-vines.jpg'


const TastingsPage = (props) => {
  return (
    <>
      <title>Tastings at Virginia Mountain Vineyards</title>
      {/* <Layout location={props.path} headerType="regular"> */}
      <FeatureHeader title="The Wine Experience"></FeatureHeader>
      <FeatureHero image={TastingsHero} anchorTo={'bottom'}></FeatureHero>
      {/* <h1 className={'dark center spaced'}>The Wine Experience</h1> */}
      <div className={'text-subheading'}>
        Virginia Mountain Vineyards staff work hard to create the best wine
        experience with breath-taking views and expert knowledge of our wines.</div>
      <HorizontalDivider></HorizontalDivider>
      <div className={'l-two-column'}>
        <p className="">
          Wine tasting is one of the most unique and enjoyable experiences.  Tasting award-winning
          wine in a gorgeous mountain-view setting with friends is truly sublime.  Your experience
          at Virginia Mountain Vineyards will include access to our best wines in a relaxed, outdoor
          setting. Our guests can choose between Wine Flights (choice of any 4 wines) or Wine and Chocolate Pairings <strong>add something making it clear that you can get more (a whole bottle)</strong>.
        </p>
        <p className="">
          To make your wine tasting experience perfect, we also offer some food selections.  We have wonderful
          gourmet cheeses produced by local dairy farms. Our decadent wine and chocolate pairings showcase chocolates
          crafted by a local chocolatier in Roanoke. You are also welcome to bring a picnic of your personal favorites to enjoy with our wines.
        </p>
        <p className="">
          When you visit Virginia Mountain Vineyards, you will find a family-friendly environment with
          activities both adults and children will enjoy including ping pong, foosball, and corn hole.
          We also welcome friendly dogs who usually love our beautiful and open pastoral fields.
          All we ask is that you clean up after your pet to keep our grounds clean for everyone.
        </p>
      </div>

      {/* <p className="text-body-highimpact">
        Because we only have outdoor seating, the Tasting Room is only open for curbside 
        pickup on Friday and Saturday Afternoons during winter months.  As soon as it gets 
        warm enough to sit outside, we will re-open the Tasting Room for outdoor seating.</p> */}
      <HorizontalDivider></HorizontalDivider>

      {/* </Layout> */}
    </>
  )
}

export default TastingsPage
