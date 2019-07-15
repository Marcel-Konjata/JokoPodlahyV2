import React from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"

function SideMenu(props) {
  return (
    <aside className={`sidebar`}>
      <AniLink fade to="/kdo_jsme">
        <span onClick={props.toggle}>Kdo Jsme</span>
      </AniLink>
      <AniLink fade to="/galerie">
        <span onClick={props.toggle}>Galerie</span>
      </AniLink>
      <AniLink fade to="/kontakt">
        <span onClick={props.toggle}>Kontakt</span>
      </AniLink>
    </aside>
  )
}

export default SideMenu
