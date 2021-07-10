import React from 'react';
import { Header } from "../components/Header"
import FeatureHeader from "../components/FeatureHeader";
import FeatureHero from "../components/FeatureHero";
import HorizontalDivider from "../components/HorizontalDivider";
import WineList from "../components/WineList"
import Layout from "../components/layout"
import WinesHero from '../images/tastings-hero.webp'


const Wines = (props) => {

  return (
    <>
      <title>Home Page</title>
      {/* <Layout location={props.path} headerType="regular"> */}
      <FeatureHeader title="Wines"></FeatureHeader>
      <FeatureHero image={WinesHero}></FeatureHero>
      <p className={'xl'}>
        The winemaking philosophy at Virginia Mountain Vineyards is to allow
        the quality of the grapes grown in our vineyard to shine in every wine.
        This requires limiting additives to the wine as much as possible and
        using the highest quality barrels and tanks for aging the wine.
      </p>
      <HorizontalDivider></HorizontalDivider>
      <p className={'xl'}>
        The wine selection offers something for every palette, both white and
        red wines  -  from gently sweet to full-bodied, elegant, and dry.
        Virginia Mountain Vineyards produces 11 different wines from 5 grapes
        varietals grown in our vineyard  -  Chardonnay, Traminette, Cabernet
        Franc, Merlot, and Petit Verdot. Recently planted in April of 2020,
        Sauvignon Blanc is our newest varietal. We look forward to sharing some
        lovely Sauvignon Blanc vintages with you in the future.</p>
      <section className={'wine-list'}>
        <WineList></WineList>
      </section>

      {/* </Layout> */}
    </>
  )
}

export default Wines
