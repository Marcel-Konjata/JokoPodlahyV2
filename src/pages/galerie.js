import React from "react"
import Layout from "../components/Layout"

import ImageGallery from "../components/imageGallery/ImageGallery";

function Gallery() {
  return (
    <Layout>
      <div className="galerie">
          <ImageGallery />
      </div>
    </Layout>
  )
}

export default Gallery