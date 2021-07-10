import React from 'react';

const FeatureHero = (props) => {
  return (
    <div className={`feature-hero ${props.anchorTo}`} style={{ backgroundImage: `url(${props.image})` }}>
    </div>
  )
}
export default FeatureHero

