import React from "react"
import { Link } from "gatsby"

function SideMenu(props) {
  return (
    <aside className={`sidebar`}>
      <Link to="/kdo_jsme">
        <span onClick={props.toggle}>Kdo Jsme</span>
      </Link>
      <Link to="/galerie">
        <span onClick={props.toggle}>Galerie</span>
      </Link>
      <Link to="/kontakt">
        <span onClick={props.toggle}>Kontakt</span>
      </Link>
    </aside>
  )
}

export default SideMenu
