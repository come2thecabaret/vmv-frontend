import React, { } from 'react';
import Logo from '../images/big-logo.inline.svg'
import FeatureHeaderPattern from '../images/feature-header-pattern.webp'

const FeatureHeader = (props) => {
  return (
    <div className={`feature-header`} style={{ backgroundImage: `url(${FeatureHeaderPattern})` }}>
      <div className={'feature-header__logo'}>
        <Logo />
      </div>
      <h1 className={'shadow'}>{props.title}</h1>

    </div>
  )
}

export default FeatureHeader

