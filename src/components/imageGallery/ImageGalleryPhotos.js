import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const GalleryPhotos = ({getPhoto}) => {
  // tady pouzij grpahql fetch na all files
  const data = useStaticQuery(
    graphql`
      query {
        assets: allFile(
          filter: {
            extension: { regex: "/(jpg)|(jpeg)|(png)/" }
            relativeDirectory: { eq: "galerie" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    //tady pomoci map narednrovat fotky gatsbyimageshaprfluid styl
    data.assets.edges.map((edge,id) => (
      <div key={id} className="gallery-image" onClick={()=>getPhoto(edge.node.childImageSharp.fluid)} >
        <Image fluid={edge.node.childImageSharp.fluid}  />
      </div>
    ))
  )
}
export default GalleryPhotos
