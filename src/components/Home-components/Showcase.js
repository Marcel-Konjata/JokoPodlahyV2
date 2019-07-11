import React from "react"
import ShowcaseHeadlines from "./ShowcaseHeadlines"
import ShowcaseImage from "./ShowcaseImage"

function Showcase() {
  return (
    <section className="showcase wrapper">
      <ShowcaseHeadlines />
      <main>
        <aside className="col-6">
          <ShowcaseImage />
        </aside>
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
      </main>
    </section>
  )
}

export default Showcase
