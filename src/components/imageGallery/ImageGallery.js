import React from "react"
import GalleryPhotos from "./ImageGalleryPhotos"
import Image from "gatsby-image"
import { CSSTransition } from "react-transition-group"

function ImageGallery() {
  // this will exctract gatsby image srsset from GrapQL query used in GalleryPhotos
  //needed for light box;
  const [getSrcset, setSrscset] = React.useState({})
  const [isOpen, setOpen] = React.useState(false)

  function getPhoto(source) {
    setSrscset(source)
    setOpen(true)
  }

  console.log(isOpen)

  return (
    <div className="image-gallery">
      <div className="image-gallery-banner">
        <h2>Galerie</h2>
        <p>Zde najdete fotografie, které občas pořizujeme při naší práci.</p>
        <p>
          Většina projektů je nedávná, minimálně jednou do roka galerii
          aktualizujeme.
        </p>
      </div>
      <div className="image-gallery-main">
        <GalleryPhotos getPhoto={getPhoto} />

        <CSSTransition
          in={isOpen}
          timeout={500}
          classNames="animation"
          mountOnEnter
          unmountOnExit
        >
          <div className="overlay">
            <div className="lightbox">
              <Image fluid={getSrcset}></Image>
              <button onClick={() => setOpen(false)}>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  )
}

export default ImageGallery
