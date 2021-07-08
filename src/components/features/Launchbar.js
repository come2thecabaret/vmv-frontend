import * as React from "react"
import { Link } from "gatsby"

const Launchbar = (props) => {
  return (
    <div className={'quick-links'}>
      <div className={'quick-links__inner'}>
        <Link to="/" className={''}>Book a Tasting</Link>
        <Link to="/">Explore Our Wines</Link>
        <Link to="/">Schedule a Tour</Link>
        <Link to="/">Hours &amp; Location</Link>
      </div>
    </div>
  )
}

export default Launchbar
