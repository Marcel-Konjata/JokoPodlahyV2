import React, { useState } from "react"
import IntroText from "./IntroText"
import CardsSlider from "./CardsSlider"
import Info from "./TextBanner"
import { CSSTransition, } from "react-transition-group"

/* 
  In this case hooks will handle UI conditional logic
*/

export const Intro = () => {
  const [getDisplay, setDisplay] = useState("cards")
  const [isClicked, setClick] = useState(false)

  function handleClick() {
    setDisplay(prevState => {
      if (prevState === "cards") return "info"
      if (prevState === "info") return "cards"
    })
    setClick(clicked => (clicked ? false : true))
  }

  return (
    <>
     
      <div className="wrapper intro">
        <div className="col-4">
          <IntroText handleClick={handleClick} isClicked={isClicked} />
        </div>
        <div className="col-8 intro-cards">
       
          <div className="transition-helper">

              
            <CSSTransition
              in={getDisplay === "cards" ? true : false}
              timeout={{enter:700, exit:500}}
              classNames='anime-cards'
              unmountOnExit
              mountOnEnter
             
            >
            <CardsSlider display={getDisplay} />
            </CSSTransition>
          
            <CSSTransition
              in={getDisplay === "info" ? true : false}
              timeout={1000}
              classNames='anime-info'
              unmountOnExit
              mountOnEnter
             
            >
              <Info display={getDisplay} />
            </CSSTransition>
        
            </div>
        </div>
      </div>
    
    </>
  )
}

export default Intro
