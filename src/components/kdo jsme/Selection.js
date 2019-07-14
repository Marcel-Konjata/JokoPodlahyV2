import React from 'react'

function Selection({active, setActive}) {
    return (
      <aside className="kdo_jsme">
        <h1
          onTouchStart={e => setActive(e)}
          onMouseOver={e => setActive(e)}
          className={active === "KDO JSME" ? "active" : null}
        >
          Kdo jsme
        </h1>
        <h3
          onTouchStart={e => setActive(e)}
          onMouseOver={e => setActive(e)}
          className={active === "V CO VĚŘÍME" ? "active" : null}
        >
          V co věříme
        </h3>
        <h3
          onTouchStart={e => setActive(e)}
          onMouseOver={e => setActive(e)}
          className={active === "NAŠE ZKUŠENOSTI" ? "active" : null}
        >
          Naše zkušenosti
        </h3>
        
      </aside>
    )
}

export default Selection
