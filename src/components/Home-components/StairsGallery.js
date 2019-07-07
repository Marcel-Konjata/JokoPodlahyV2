import React from "react"
import Image1 from "./../../images/shody_galerie/schody1.jpg"
import Image2 from "./../../images/shody_galerie/schody2.jpg"
import Image3 from "./../../images/shody_galerie/schody3.jpg"
import Image4 from "./../../images/shody_galerie/schody4.jpg"

class StairsGallery extends React.Component {
  state = {
    images: [Image1, Image2, Image3, Image4],
    mainImage: [Image4],
  }

  changeImage = event => {
    this.setState({
      mainImage: event.target.src,
    })
  }

  render() {
    return (
      <section className="stair-gallery">
        <div className="main">
          <div className="image">
            <img src={this.state.mainImage} alt="ukazka schodist" />
          </div>
          <article>
            <h2>
              Tak místo podlah schodiště?
              <span>I to dokážeme</span>
            </h2>
            <p>
              Jestli jste si někdy říkali, chtěl bych si udělat z obyčejných
              betonových schodů dřevěné, nebo klidně je nechal potáhnout
              kobercem napevno jako to mají třebas v amerických seriálech, my s
              tím máme zkušenosti a bez problémů realizujeme.
            </p>
          </article>
        </div>
        <div className="thumbnails">
          {this.state.images.map((image, id) => (
            <div className="thumb" key={id}>
              <img
                src={image}
                alt="nahled"
                onClick={this.changeImage}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default StairsGallery
