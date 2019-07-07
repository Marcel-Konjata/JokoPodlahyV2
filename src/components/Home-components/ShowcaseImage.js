import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const ShowcaseImage = ({ data }) => {
  return (
    <React.Fragment>
      <StaticQuery
        query={graphql`
          query {
            wall: file(relativePath: { eq: "zed1.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => <Img fluid={data.wall.childImageSharp.fluid} />}
      />
    </React.Fragment>
  )
}

export default ShowcaseImage
