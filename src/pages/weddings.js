import * as React from "react";
import Header from "../components/Header";
import FeatureHeader from "../components/FeatureHeader";
import FeatureHero from "../components/FeatureHero";
import HorizontalDivider from "../components/HorizontalDivider";
import Layout from "../components/layout";
import WeddingsHero from "../images/bride-groom-doors.jpg";

const Weddings = (props) => {
  return (
    <>
      <title>Weddings</title>
      {/* <Layout location={props.path} headerType="regular"> */}
      <FeatureHeader title="Weddings"></FeatureHeader>
      {/* <FeatureHero image={WeddingsHero}></FeatureHero> */}
      <div className={"weddings-hero-container"}>
        <img
          src={WeddingsHero}
          className={"weddings-hero-image"}
          alt="Bride and groom celebrating their wedding"
        />
        <div className={"text-subheading weddings"}>
          Many dream of having their wedding in a vineyard.
          <br />
          Virginia Mountain Vineyards can make that dream come true.
        </div>
      </div>
      <div className="body-padded row">
        <div class="wedding-grid">
          <p class="wedding-grid-child1">
            Our vineyard offers a gorgeous, outdoor chapel setting surrounded by
            grapevines and lined with our famous red rose bushes. Our reception
            venue is a wonderful, large stone patio covered by a tri-peaked
            white tent. The impressive panoramic views of the Blue Ridge
            Mountains from our Event Center and the elegance of the beautiful
            chandeliers under our tent deliver a dreamy and romantic experience
            for brides, grooms, and guests.
          </p>
          <div class="wedding-grid-child2"> </div>
          <div class="wedding-grid-child3"></div>
          <div class="wedding-grid-child4">
            We would love to work with you to create the wedding of your dreams!
            If you are ready to schedule a visit, please fill out the following
            contact form and we will be in touch with you as quickly as
            possible. Or, to get more information about planning your wedding at
            Virginia Mountain Vineyards, download a brochure below.
          </div>
        </div>
      </div>
      <button>(button to download brochure)</button>
      <div>
        <strong>wedding intake/interest form</strong>
      </div>
      <div>
        <strong>pics/mosaic/gallery?</strong>
      </div>

      {/* </Layout> */}
    </>
  );
};

export default Weddings;
