import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import ImageGallery from "../components/imageGallery/ImageGallery";

function Gallery() {
  return (
    <Layout>
    <SEO title="Galerie" />
      <div className="galerie">
          <ImageGallery />
      </div>
    </Layout>
  )
}

export default Gallery