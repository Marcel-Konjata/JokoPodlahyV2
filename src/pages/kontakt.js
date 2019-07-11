import React from "react"
import Layout from "../components/layout"
import KontaktImage from "../images/contact.jpg"
function kontakt() {
  return (
    <Layout>
      <div className="kontakt">
        <div className="kontakt-card">
          <h2>Kontakt</h2>
          <p>
            Kontaktovat nás můžete skrze e-mail nebo telefoní čísla. Zpravidla
            preferujeme kontakt telefonicky
          </p>
          <div className="kontakt-image">
            <img src={KontaktImage} alt="contact-card" />
          </div>
          <footer>
            <div className="marcel">
              <span>Marcel Konjata</span>
              <span>774 083 038</span>
              <span>Karelvor@seznam.cz</span>
            </div>
            <div className="mira">
              <span>Miroslav Jonák</span>
              <span>736 678 130</span>
              <span>mirajonak@email.cz</span>
            </div>
          </footer>
        </div>
      </div>
    </Layout>
  )
}

export default kontakt
