import React, { } from 'react';
import TastingsHero from '../images/tastings-hero.webp'

export const FeatureHero = (props) => {
  return (
    <div className={`feature-hero`} style={{ backgroundImage: `url(${TastingsHero})` }}>
    </div>
  )
}

