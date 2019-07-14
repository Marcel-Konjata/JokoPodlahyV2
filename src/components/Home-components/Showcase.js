import React from "react"
import ShowcaseHeadlines from "./ShowcaseHeadlines"
import ShowcaseImage from "./ShowcaseImage"
import Fade from "react-reveal/Fade"

function Showcase() {
  return (
    <section className="showcase wrapper">
     <Fade fraction={1} duration={1500}>
        <ShowcaseHeadlines />
        </Fade>
      <main>
      <Fade fraction={.6}>
        <aside className="col-6">
          <ShowcaseImage />
        </aside>
        </Fade>
        <Fade right fraction={.9} duration={1400}>
        <article className="showcase-text col-6">
          <h2>Dokážeme Cokoliv</h2>
          <p>
            Někdo si na zeď chce nechat pověsit vinylové desky, někdo chce na
            zeď trochu jinej Vinyl.
          </p>
          <p>
            Vinyl má užasnou vlastnost, že dokáže imitovat několik druhů
            materiálu jak na pohled tak na dotek.
          </p>
          <p>
            Už máme za sebou několik zakázek různých druhů (od koupelen po
            ateliéry), kde jsme použily Vinyl i na zdi (viz foto)
          </p>
        </article>
        </Fade>
      </main>
    </section>
  )
}

export default Showcase
