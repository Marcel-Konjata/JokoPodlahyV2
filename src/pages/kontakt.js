import React from "react"
import SEO from "../components/seo"
import KontaktImage from "../images/contact.jpg"
import Layout from "../components/Layout";
function kontakt() {
  return (
    <Layout>
    <SEO title="kontakt" />
      <div className="kontakt">
        <div className="kontakt-card">
          <h2>Kontakt</h2>
          <p>
            Kontaktovat nás můžete skrze e-mail nebo telefoní čísla. Zpravidla
            preferujeme kontakt telefonicky
          </p>
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
        <div className="wrapper">
          <div className="kontakt-image">
            <img src={KontaktImage} alt="contact-card" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default kontakt
