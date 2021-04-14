import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/industries/Hero"
import ImageRow from "../components/industries/ImageRow"
import Helmet from "react-helmet"
import styled from "styled-components"
import { isBrowser } from "react-device-detect"

const Industries = () => {
  useEffect(() => {
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 100)
  }, [])

  return (
    <Layout>
      <SEO title="Industries" />
      <Helmet>
        <body class="industries" />
      </Helmet>
      <Hero />
      <ImageRow />
    </Layout>
  )
}

export default Industries
