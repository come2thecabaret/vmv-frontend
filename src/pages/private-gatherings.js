import * as React from "react";
import Header from "../components/Header";
import FeatureHeader from "../components/FeatureHeader";
import FeatureHero from "../components/FeatureHero";
import HorizontalDivider from "../components/HorizontalDivider";
import PrivateGatheringsHero from "../images/private-gatherings.webp";
import Layout from "../components/layout";
import SunsetTent from "../images/sunset-tent.webp";
import Divider from "../images/Divider.svg";

const PrivateGatherings = (props) => {
  return (
    <>
      <title>Tastings at Virginia Mountain Vineyards</title>
      {/* <Layout location={props.path} headerType="regular"> */}
      <FeatureHeader title="Private Gatherings"></FeatureHeader>
      <FeatureHero image={PrivateGatheringsHero}></FeatureHero>
      <div className="text-subheading--small">
        Virginia Mountain Vineyards is a wonderful place to host your next party
        or private gathering. Helping to realize your dream event is our goal!
      </div>
      <img
        src={Divider}
        alt="horizontal rule divider"
        className={"hr-divider"}
        // width={60}
        height={45}
      />
      {/* <div className="text-subheading--big">
        <p>
          We have a wonderful <strong>Event Center</strong> to host both small and large gatherings.
          Whether you are celebrating personal milestones like birthdays or anniversaries
          or business events celebrating retirements or holiday parties, Virginia Mountain
          Vineyards can provide a gorgeous venue with <strong>panoramic mountain views</strong> in a pastoral
          setting.
        </p>
      </div> */}

      <div className="body-padded row">
        <section className="body-col even-col">
          <h3>We host many private events including:</h3>
          <ul>
            <li>Birthdays</li>
            <li>Bridal Showers</li>
            <li>Baby Showers</li>
            <li>Anniversary Parties</li>
            <li>Corporate Events</li>
            <li>Many more</li>
          </ul>
        </section>
        <section className="body-col even-col">
          <h3>Event Center Features:</h3>
          <ul>
            <li>Large, tri-peaked tent (80 feet by 40 feet)</li>
            <li>Stunning paved patio</li>
            <li>Beautiful chandeliers and Edison lighting</li>
            <li>Lanterns surround the perimeter</li>
            <li>Seats as many as 250 guests</li>
            <li>Configurable for smaller, intimate setting</li>
          </ul>
        </section>
      </div>
      <div className="body-padded row">
        <p>
          Although we do not provide catering ourselves, we are happy to work
          with any caterer you choose. There are many talented local caterers,
          and we are more than happy to connect you with caterers who have
          served wonderful events at our venue. Of course, we love to provide
          our award-winning wines for your guests to enjoy!
        </p>
      </div>
      <div className="body-padded body-clamped-wide body-tight-top">
        <img
          src={SunsetTent}
          width="100%"
          height="auto"
          style={{ display: "block" }}
          alt="Private Gatherings"
          className="sunset-tent-image"
        />
        <div className="body-padded heavy-block">
          <div>We would love to be part of your next private gathering.</div>
          <div>
            For more information, please contact us at:
            <div className="heavy-highlighted">
              info@vmvines.com or (540) 473-2979.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivateGatherings;
