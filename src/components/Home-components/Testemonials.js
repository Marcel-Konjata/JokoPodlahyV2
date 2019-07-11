import React from "react"
import TestemonialCard from "./TestemonialCard"
import Slider from "./Slider"

class Testemonials extends React.Component {
  state = {
    reviews: [
      {
        name: "Alena Klasnová",
        review:
          "Špičková práce vč.detailů. Vinylová podlaha v rolích 3 různé barvy v jedné velké místnosti rozdělené na tři obytné zóny. Kompletní dodávka vč. vyrovnání podkladu, lišt, přechodů a schodových hran. Dále dodávka a montáž dveří ve složitých prostorech, vše opět naprosto do detailu dokončeno a v neuvěřitelném termínu. Ještě jednou díky kluci.",
        stars: 5,
      },
      {
        name: "Honza Naglmuller",
        review:
          "Musim se také podělit o své zkušenosti. Nemam nez slova chvály a díku za provedenou praci. Jakožto naprosto nezkušení s rekonstrukci jsme dostali spoustu tipů a rad jak pokračovat, o zábavě během pokládky podlahy ani nemluvím :). Výsledek naprosto perfektní, domluva vždy platila, přístup, zodpovědnost, ochota...... Jeste jednou děkujeme za vsechno! K a H Nagl.",
        stars: 5,
      },
      {
        name: "Pavel Kůla",
        review:
          "Celý barák ve vynilu,a všem vřele doporučuji, precizní práce,puntíčkáři.",
        stars: 5,
      },
      {
        name: "Petr Čiviš",
        review: "Parádní spolupráce a podlahy vypadají nadherne",
        stars: 5,
      },
      {
        name: "Pavlína Brožová",
        review:
          "Vynikající. Lepší podlahářství než J&K Podlahy není. Kluci jsou borci. Skvělá práce. Super komunikace. Doporučuji všem.",
        stars: 5,
      },
    ],
  }

  Testemonials = () => {
    return this.state.reviews.map(review => (
      <TestemonialCard key={review.name} {...review} />
    ))
  }

  render() {
    return (
      <div className="testemonials">
        <Slider>{this.Testemonials()}</Slider>
      </div>
    )
  }
}

export default Testemonials
