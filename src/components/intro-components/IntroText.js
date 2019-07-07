import React from "react"
import { Link } from "gatsby"
import LongArrow from "../inlinesSvg/LongArrow"
import Arrow from "../inlinesSvg/Arrow"

/* 
  is clicked props will conditionally render btn text (for ux - user perspective)
  handleclick will set state in parrent to conditionally render sibling component text/cards
*/

const IntroText = ({ handleClick, isClicked }) => {
  return (
    <div className="intro-card">
      <h1 className="intro-mainHeader">JokoPodlahy</h1>
      <h2 className="intro-secondaryHeader">
        renovace a pokládání podlah na zakázku
      </h2>
      <p>
        Dohromady máme více než 25 let zkušeností s pokládáním a renovací podlah
        a Pracujeme se všemi druhy materiálů.
      </p>
      <div className="intro-links">
        <Link to="/kontakt" className="btn-outline btn-outline--brown">
          Kontaktuje nás
        </Link>
        <button className="transparent-btn" onClick={handleClick}>
          {isClicked ? "ukaž méně" : "zjistit více"}
          <span className="arrows">
            <LongArrow />
            <Arrow />
          </span>
        </button>
      </div>
    </div>
  )
}

export default IntroText
