import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"
import WeddingsCarousel from "../../components/WeddingsCarousel";


const WeddingsFeature = (props) => {
  return (
    <section className={'weddings'}>
      <WeddingsCarousel></WeddingsCarousel>
      <div className={'weddings__text'}>
        <h2 className={'dark spaced-bottom'}>Weddings in the Vines</h2>
        <div className={'weddings__blurb text-body-regular'}>
          <p>          The natural beauty of Virginia Mountain Vineyards is what wedding dreams are made of.
            From an intimate wedding ceremony nestled in the grapevines to the glittering, vaulted
            wedding tent overlooking the panoramic view of the Blue Ridge Mountains, weddings at Virginia
            Mountain Vineyards are truly special and leave lasting memories for brides, grooms, and their guests!
          </p>
        </div>
        <Link className="weddings__button" to="/weddings/">learn more +</Link>
      </div>
    </section>)
}
export default WeddingsFeature
