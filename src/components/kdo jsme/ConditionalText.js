import React from "react"

import Kuchyn from "../../images/kuchyn.jpg"
import Prkna from "../../images/prkna2.jpg"
import { CSSTransition } from "react-transition-group"

function ConditionalText({ active }) {
  console.log()

  return (
    <section className="conditional">
      <CSSTransition
        appear
        classNames="fade"
        timeout={{exit:500, enter:1000}}
        in={active.toLowerCase() === "kdo jsme"}
        mountOnEnter
        unmountOnExit
      >
        <KdoJsme />
      </CSSTransition>
      <CSSTransition
        classNames="fade"
        timeout={{exit:500, enter:1000}}
        in={active.toLowerCase() === "v co věříme"}
        mountOnEnter
        unmountOnExit
      >
        <VcoVerime />
      </CSSTransition>
      <CSSTransition
        classNames="fade"
        timeout={{enter:1000, exit:500}}
        in={active.toLowerCase() === "naše zkušenosti"}
        mountOnEnter
        unmountOnExit
      >
        <Zkusenosti />
      </CSSTransition>
    </section>
  )
}

export default ConditionalText

function KdoJsme() {
  return (
    <div className="conditional-text">
      <h2>Kdo jsme</h2>
      <p>
        JoKo je anagram z našich příjemní, takže abychom se řádně představili
        jsme Miroslav Jonák a Marcel Konjata
      </p>
      <p>Jsme dva živnostníci, kteří spolu pracují již více než 10 let.</p>
      <p>
        Oba dva máme dohromady více než 25 let praxe v oboru, přitom ještě máme
        zkušenosti s truhlařinou.{" "}
      </p>
      <p>
        Bez větších debat jsme jedni z nejlepších podlahářů v Západočeském Kraji
      </p>
      <p>
        Nicméně máme za sebou řadu zakázek i mimo ČR například Švýcarsko a
        Rakousko. Pokud je zákazník ochotný nabídnout adekvátní odměnu za práci,
        nedělá nám problém dojezd.
      </p>
    </div>
  )
}

function VcoVerime() {
  return (
    <div className="conditional-text">
      <h2>V co věříme</h2>
      <p>
        Osobně jsme se setkali s tím, že dneska je docela vzácnost dodržovat
        termíny.
      </p>
      <p>
        No tak pro nás dodržovat termíny je samozřejmost. Když něco řekneme tak
        to platí, a spolehlivost je prostě něco, co odlišuje kvalitní řemeslo od
        flákačů.
      </p>
      <p>
        Věříme v to, že práce a výsledky předčí tísíce slov, a proto děláme to
        co umíme jak nejlépe to umíme, a hlavně tak aby to předčilo kvalitou
        konkurenci.
      </p>
      <p>
        Vždy je prostor kam se posouvat, výzvy které je super pokořit a my se
        toho rozhodně nebojíme.
      </p>
      <p>
        V každém případě nemáme rádi, když i přes naší dobrou vůli a snahu
        vyhovět, zákazník nedodržuje svojí část dohody.
      </p>
    </div>
  )
}

function Zkusenosti() {
  return (
    <div className="conditional-text">
      <h2>Naše zkušenosti</h2>
      <p>
        Během posledních pěti let jsme se podíleli na kompletní výměně podlah na
        zámku Lítov. Byli jsme najati pro výměnu povrchu kabin stadionu Viktorie
        Plzeň a pro položení koberců v VIP zóně.
      </p>
      <p>
        Mimo jiné jsme i kromě běžných zakázek dělali i několik neobvyklých jako
        je napojování dřevěné podlahy přímo do dlažby nebo obložení zdí vinylem
      </p>

      <div className="images">
        <div className="img1">
          <img src={Prkna} alt="prkna"></img>
        </div>
        <div className="img2">
          <img src={Kuchyn} alt="kuchyn-oblozeni"></img>
        </div>
      </div>
    </div>
  )
}
