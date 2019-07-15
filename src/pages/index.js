import React from "react"

import Layout from "../components/Layout"

import SEO from "../components/seo"
import Intro from "../components/intro-components/Intro"
import Showcase from '../components/Home-components/Showcase'
import StairsGallery from "../components/Home-components/StairsGallery"
import Offer from "../components/Home-components/Offer"
import Testemonials from "../components/Home-components/Testemonials"

//layout animated fires up css svg animation of hand written logo, by default is set to false
const IndexPage = () => (
  <Layout animated>
    <SEO title="Hlavní Strana" />
    <Intro />
    <Showcase />
    <StairsGallery />
    <Offer />
    <Testemonials />
  </Layout>
)

export default IndexPage
