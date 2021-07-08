import * as React from "react"
import Logo from '../../images/big-logo.inline.svg'
import HeroImage from '../../images/hero.webp'


const Hero = (props) => {
  return (
    <div className="vmv-hero" style={{ backgroundImage: `url(${HeroImage})` }}>
      <Logo />
    </div>)
}

export default Hero
