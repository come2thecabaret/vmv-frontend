import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import HeaderLocalNav from './HeaderLocalNav'
import HeaderNavButtons from './HeaderNavButtons';
import Monogram from '../images/monogram.inline.svg'
import Logo from '../images/big-logo.inline.svg'
import FeatureHeaderPattern from '../images/feature-header-pattern.webp'

export const FeatureHeader = (props) => {
  return (
    <div className={`feature-header`} style={{ backgroundImage: `url(${FeatureHeaderPattern})` }}>
      <div className={'feature-header__logo'}>
        <Logo />
      </div>
      <div className={'feature-header__title'}>{props.title}</div>

    </div>
  )
}

