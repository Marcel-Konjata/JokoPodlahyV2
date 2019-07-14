import React from "react"

import Layout from "../components/Layout"

import SEO from "../components/seo"
import SelectOnHover from "../components/intro-components/SelectOnHover"
import Selection from "../components/kdo jsme/Selection"
import ConditionalText from "../components/kdo jsme/ConditionalText"

const KdoJsme = () => (
  <Layout>
    <SEO title="Kdo jsme" />
    <SelectOnHover
      render={({ setActive, active }) => (
        <section className='about'>
          <Selection setActive={setActive} active={active} />
          <ConditionalText active={active} />
        </section>
      )}
    />
  </Layout>
)

export default KdoJsme
