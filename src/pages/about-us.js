import * as React from "react"
import { Header } from "../components/Header"
import "../styles.scss"
import { FeatureHeader } from "../components/FeatureHeader";
import { FeatureHero } from "../components/FeatureHero";
import { HorizontalDivider } from "../components/HorizontalDivider";


const AboutUs = (props) => {
  return (
    <main>
      <title>About Us</title>
      <Header currentPath={props.path}></Header>
      <FeatureHeader title="About Us"></FeatureHeader>
      <div className="placeholder">
        <p>
          Virginia Mountain Vineyards is located in the town of Fincastle, Virginia which was founded in 1772.  Fincastle, Virginia is in the historical County of Botetourt.  In the late 18th and early 19th centuries, Botetourt County was the third largest county in the United States and was comprised of portions of West Virginia, Kentucky, Ohio, Indiana, Illinois and Wisconsin as well as Virginia.  Today, Botetourt County is a great tourist destination for hiking, camping, river rafting, other outdoor sports, and fans of great American history.
        </p>
        <p>
          Virginia Mountain Vineyards is a winery and vineyard and is part of the rich heritage of wineries and vineyards in the beautiful Commonwealth of Virginia.  It is nestled on 91 acres between the Blue Ridge and Allegheny Mountains about 25 miles north of Roanoke in a viticultural area known as the North Fork of Roanoke.
        </p>
        <p>
          The vineyard was first planted in 1998 with initial plantings of Chardonnay and Cabernet Franc grapevines.  Several years later, Traminette, Merlot, and Petit Verdot were added.  More recently, Sauvignon Blanc was planted bringing the total to 9 acres of grapevines.  The vineyard is well-known for producing some of the best grapes in the Commonwealth of Virginia.  The winery produces “estate” wines which means that all Virginia Mountain Vineyards wines are produced from grapes grown in the vineyard.
        </p>
        <p>
          In 2018, Virginia Mountain Vineyards was purchased by new owners, Brian Weber and Jacqui Sobieski.  Their focus has been creating a winery destination for Wine Tasting guests and those looking for a stunning location for weddings and special events.  They have also focused on emphasizing quality winemaking practices as they strive to make Virginia Mountain Vineyards known for producing some of the best wines in the Commonwealth of Virginia.
        </p>
      </div>

    </main>
  )
}

export default AboutUs
