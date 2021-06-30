import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import HeaderLocalNav from './HeaderLocalNav'
import HeaderNavButtons from './HeaderNavButtons';
import Monogram from '../images/monogram.inline.svg'
import Logo from '../images/big-logo.inline.svg'
import FeatureHeaderPattern from '../images/feature-header-pattern.webp'
import TastingsHero from '../images/tastings-hero.webp'

export const FeatureHero = (props) => {
  return (
    <div className={`feature-hero`} style={{ backgroundImage: `url(${TastingsHero})` }}>
    </div>
  )
}

