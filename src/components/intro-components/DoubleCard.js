import React from "react"
import NextArrow from '../../assets/arrow.inline.svg'

const DoubleCard = props => {
  const {
    cardNumber,
    smallImg,
    largeImg,
    description,
    descriptionLarge,
    swap,
  
    animationSwap
  } = props

  const renderedBtn = cardNumber => {
    if (cardNumber === 1) {
      return (
        <button
          className="btn-next btn-doubleCard"
          name="next"
          onClick={event => {
            swap(event)
          }}
        ><NextArrow /></button>
      )
    }
    if (cardNumber === 2) {
      return (
        <button
        style={{transform:'rotate(180deg)'}}
          className="btn-previous btn-doubleCard"
          name="previous"
          onClick={event => {
            swap(event)
          }}
        ><NextArrow/></button>
      )
    }
  }
  

  return (
    <div className={`card-wrapper ${animationSwap}`}>
      <div className="smallCard">
        <img src={smallImg} alt={description} />
        {renderedBtn(cardNumber)}
      </div>

      <div className="largeCard">
        <img src={largeImg} alt={descriptionLarge} />
      </div>
    </div>
  )
}

export default DoubleCard
