import React from "react"
import { Link } from "gatsby"
import FBlogo from "./../assets/fb.inline.svg"

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="wrapper">
        <div className="row">
          <div className="main-footer-about">
            <h4>O nás</h4>
            <p>Pokud se o nás chcete dozvědět více navšitve sekci kdo jsme</p>
            <Link to="/kontakt">nebo klikněte sem</Link>
          </div>
          <div className="main-footer-follow">
            <h4>Sledujte nás na Facebboku</h4>
            <p>
              Na našem profilu pravidelně přidáváme zajímavější projekty.
              Kontaktovat nás můžete i tam.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="copyrigth">
            <p>jokopodlahy.cz</p>
            <p> {new Date().getFullYear()} © všechna práva vyhrazena</p>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/JK-Podlahy-333271600491716/?epa=SEARCH_BOX" target="blank">
              <FBlogo />
            </a>
            <p>náš profil</p>
          </div>
          <div className="main-footer-phone">
            <span>tel.</span>
            <div className="numbers">
              <span>736 678 130</span>
              <span>774 083 038</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
