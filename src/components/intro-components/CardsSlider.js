import React, { Component } from "react"
import DoubleCard from "./DoubleCard"
import smallImage1 from "../../images/dlazba-prkna.jpg"
import smallImage2 from "../../images/koupelna.jpg"
import largeImage1 from "../../images/schody.jpg"
import largeImage2 from "../../images/prkna.jpg"


export class CardsSlider extends Component {
  state = {
    cardTodisplay: 1,
    animationSwap:''
  }
  handleSwap = event => {
    const { name } = event.target
    if (name=== "previous") {
      this.setState(currentstate => {
        const newState = currentstate.cardTodisplay - 1
        return { cardTodisplay: newState, animationSwap:'previous' }
      })
    }
    if (name === "next") {
      this.setState(currentstate => {
        const newState = currentstate.cardTodisplay + 1
        return { cardTodisplay: newState, animationSwap:'next'}
      })
    }
  }
  render() {
    return (
      
      <div className={`card-slider`}>
        <div className="slider-row">
          <DoubleCard
            cardNumber={1}
            smallImg={smallImage1}
            largeImg={largeImage1}
            description="podlaha drevena s napojenim na dlazbu"
            descriptionLarge="obklad schodu drevenymi prkny"
            swap={this.handleSwap}
            
            animationSwap={this.state.animationSwap}

          />
          <DoubleCard
            cardNumber={2}
            smallImg={smallImage2}
            largeImg={largeImage2}
            descriptionLarge="klasicka drevena podlaha"
            description="obklad koupelnove zdi vinylem"
            swap={this.handleSwap}
           
            animationSwap={this.state.animationSwap}
          />
        </div>
      </div>
     
    )
  }
}

export default CardsSlider
