import React, { useEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/solution/Hero"
import Solutions from "../../components/solution/Solutions"
import KeySpecs from "../../components/solution/KeySpecs"
import UseCases from "../../components/solution/UseCases"
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
    <Layout>
      <SEO title="Stardust" />
      <Helmet>
        <body class="stardust" />
      </Helmet>
      <Hero />
      <Solutions />
      <KeySpecs />
      <UseCases />
    </Layout>
  )
}

export default Stardust
