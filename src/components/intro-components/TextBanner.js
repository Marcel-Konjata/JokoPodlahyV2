import React from "react"

function TextBanner(props) {
  return (
    <div className={`info-card ${props.display==='info'?'info':'dismount'}`}>
      <h2>Naše služby</h2>
      <ul className="service-list">
        <li>Marmoleum, Vinyl, Koberce lepením.</li>
        <li>Renovace parket a dřevěných krytin.</li>
        <li>
          Pokládáme dřevěné podlahy, klasicky moderním stylem i po staru na hřeb
          (dobové).
        </li>
        <li>Parkety, s broušením lakováním.</li>
        <li>Lišotvání, stěrkování.</li>
      </ul>
    </div>
  )
}

export default TextBanner
