import React from "react"

function ShowcaseHeadlines() {
  return (
    <header className="showcase-headlines">
      <div className=" showcase-headlines--left">
        <div className="showcase-card showcase-card--transparent">
          <h3>Projekt</h3>
          <span className="showcase-card--line"></span>
          <p>Máte specifické požadavky? </p>
          <p>Domluvíme se</p>
        </div>
        <div className="showcase-card showcase-card--gold">
          <h3>Kvalita</h3>
          <span className="showcase-card--line"></span>
          <p>My naší práci vždy děláme co nejlépe</p>
        </div>
      </div>
      <div className=" showcase-headlines--right">
        <div className="showcase-card showcase-card--brown">
          <h3>Zkušenosti</h3>
          <span className="showcase-card--line"></span>
          <p>I v našem zájmu je vám poradit dobře</p>
        </div>
        <div className="showcase-card showcase-card--transparent">
          <h3>Spolehlivost</h3>
          <span className="showcase-card--line"></span>
          <p>My termíny vždy dodržíme.</p>
        </div>
      </div>
    </header>
  )
}

export default ShowcaseHeadlines
