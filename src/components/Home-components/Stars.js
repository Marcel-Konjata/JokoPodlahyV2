import React from "react"
import Star from "./../../assets/Star.inline.svg"

function Stars({ stars }) {
  function getStars(stars) {
    const starsToRender = new Array(stars)
    starsToRender.fill(<Star  />)
    //even that dev build has key prop warning it is not necessary for this case
    // number is based on manual props not for dynamic deleting or adding
    return starsToRender
  }

  return <React.Fragment>{getStars(stars)}</React.Fragment>
}

export default Stars
