import React, { } from 'react';
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

