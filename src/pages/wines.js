import * as React from "react"
import { Header } from "../components/Header"
import "../styles.scss"
import { FeatureHeader } from "../components/FeatureHeader";
import { FeatureHero } from "../components/FeatureHero";
import { HorizontalDivider } from "../components/HorizontalDivider";


const Wines = (props) => {
  return (
    <main>
      <title>Wines</title>
      <Header currentPath={props.path}></Header>
      <FeatureHeader title="Wines"></FeatureHeader>
      <div className="placeholder">
        <p>The winemaking philosophy at Virginia Mountain Vineyards is to allow the quality of the grapes grown in our vineyard to shine in every wine.  This requires limiting additives to the wine as much as possible and using the highest quality barrels and tanks for aging the wine.</p>
        <p>The wine selection offers something for every palette, both white and red wines  -  from gently sweet to full-bodied, elegant and dry.  Virginia Mountain Vineyards produces 13 different wines from 5 grapes varietals grown in our vineyard  -  Chardonnay, Traminette, Cabernet Franc, Merlot, and Petit Verdot.</p>
        <p>
          (each wine label to the left of the description – pulling in from Vinoshipper.  Question: do we have the labels already set up and just pull in the wine name and description?)
          <br />Chardonnay
          <br />Chardonnay Reserve
          <br />Traminette
          <br />Dominion Gold
          <br />Acacia Gold
          <br />Virginia White
          <br />Rose
          <br />Fincastle 1772
          <br />Cabernet Franc
          <br />Merlot
          <br />Petit Verdot
          <br />Virginia Red
          <br />Holiday Spice
        </p>
      </div>

    </main>
  )
}

export default Wines
