import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{
      textAlign:"center",
      fontFamily:'Montserrat',
      paddingTop:'20%',
      paddingBottom: '10%'
    }} >

    <h1 style={{marginBottom:25}}>Stránka nenalezena</h1>
    <p>zadali jste adresu do prohlížeče, která nevede na správnou cestu</p>
    <p>zkontrolujte si adresu v horním řádku</p>
    <p>pokud jste napsali jokopodlahy.cz a pořád se vám objevuje tento text je něco špatně na straně serveru <br/>
    a podnikneme vše pro znovu zprovozění stránek, děkujeme za pochopení
    </p>
    </div>
  </Layout>
)

export default NotFoundPage
