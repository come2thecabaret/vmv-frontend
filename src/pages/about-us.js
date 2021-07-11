import * as React from "react"
import Header from "../components/Header"
import FeatureHeader from "../components/FeatureHeader";
import FeatureHero from "../components/FeatureHero";
import HorizontalDivider from "../components/HorizontalDivider";
import Layout from "../components/layout"


const AboutUs = (props) => {
  return (
    <>
      <title>About Us</title>
      {/* <Layout location={props.path} headerType="regular"> */}
      <FeatureHeader title="About Us"></FeatureHeader>
      <div className="placeholder">
        <p>
          Virginia Mountain Vineyards is located in the town of Fincastle,
          Virginia which was founded in 1772.  Fincastle is <strong> the county seat</strong> in
          the historical County of Botetourt.  In the late 18th and early 19th
          centuries, Botetourt County was the third largest county in the United
          States and was comprised of portions of West Virginia, Kentucky, Ohio,
          Indiana, Illinois and Wisconsin, as well as Virginia.  Today, Botetourt
          County is a great tourist destination for hiking, camping, river rafting,
          other outdoor sports, and fans of great American history.
        </p>
        <p><strong>swap paragraphs and put above map</strong></p>
        {/* https://www.loc.gov/resource/gvhs01.vhs00342/?r=-0.924,-0.369,2.847,1.779,0 */}
        <p>
          Virginia Mountain Vineyards, a winery and vineyard, is part of the
          rich heritage of wineries and vineyards in the beautiful Commonwealth of
          Virginia.  It is nestled on 91 acres between the Blue Ridge and Allegheny
          Mountains about 25 miles north of Roanoke in a viticultural area known as
          the North Fork of Roanoke.
        </p>
        <p>
          The vineyard was first planted in 1998 with initial plantings of Chardonnay
          and Cabernet Franc.  Several years later, Traminette, Merlot, and
          Petit Verdot were added.  More recently, Sauvignon Blanc was planted
          bringing the total to 9 acres of grapevines.  The vineyard is well-known
          for producing some of the best grapes in Virginia.
          The winery produces “estate” wines which means that all Virginia Mountain
          Vineyards wines are produced from grapes grown in our vineyard.
        </p>
        <p>
          In 2018, Virginia Mountain Vineyards was purchased by new owners, Brian Weber
          and Jacqui Sobieski.  Their focus has been creating a winery destination for
          wine lovers <strong>what about newbies and friendly place</strong>and those looking for a stunning location for weddings
          and special events.  They have also emphasized quality winemaking
          practices as they strive to make Virginia Mountain Vineyards known for producing
          some of the best and most unique wines.
        </p>
        <p><strong>Great picture of road sign to end?</strong></p>

      </div>
      {/* </Layout> */}
    </>
  )
}

export default AboutUs
