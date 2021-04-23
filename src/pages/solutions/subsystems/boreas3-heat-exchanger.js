import React, { useEffect } from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Hero from "../../../components/solution/subsystems/Hero"
import Solutions from "../../../components/solution/subsystems/Solutions"
import KeySpecs from "../../../components/solution/subsystems/KeySpecs"
import UseCases from "../../../components/solution/subsystems/UseCases"
import Helmet from "react-helmet"
import styled from "styled-components"
import { isBrowser } from "react-device-detect"

const Stardust = () => {
  useEffect(() => {
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 100)
  }, [])

  return (
    <Layout className="dark">
      <SEO title="Stardust" />
      <Helmet>
        <body class="boreas3 heat exchanger" />
      </Helmet>
      <Hero
        eyebrow="IGE-B3HE"
        title="Boreas3 Heat Exchanger"
        />
      <Solutions />
      <KeySpecs />
      <UseCases />
    </Layout>
  )
}

export default Stardust
