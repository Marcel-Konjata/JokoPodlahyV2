import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image"

function OfferImg() {
  const data = useStaticQuery(graphql`
    query{
     offerImg: file(relativePath: {eq:"parkety.jpg"}) {
        childImageSharp {
            fluid(maxWidth:500) {
                ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
    
    `)
  return <div className="offer-img">
      <Img fluid={data.offerImg.childImageSharp.fluid} />
  </div>
}

export default OfferImg
