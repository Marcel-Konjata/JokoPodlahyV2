import React from "react"


import OfferImg from "./OfferImg"
import Carousel from "./Carousel"
import OfferText from './OfferText'

export default function Offer() {
  return (
    <section className="offer">
      <div className="line"></div>
      <div className="row">
        <OfferText
          headline="Nabídka"
          p1="V zásadě pracujeme s kompletním sortimentem, od klasických prken, po
        průmyslové PVC."
          p2={`"Velké projekty jako zámecká podlaha, palubovky pro basketbal nebo prostě
        tělocvična s parketami nám nejsou cizí."`}
          podpis={`Marcel Konjata`}
        />
        <OfferImg />
      </div>
     <Carousel />
        <div className="line" style={{marginLeft:'auto'}}></div>
      <div className="row2">
      <div className="wrapper">
        <OfferText
          headline="Spokojenost zákazníka"
          p1="Pro nás je naprosto klíčové, 
          aby vzájemná spokojenost mezi námi a zákazníkem byla maximální."
          podpis={'Miroslav Jonák'}
          leftAlign
        />
        </div>
      </div>
    </section>
  )
}



