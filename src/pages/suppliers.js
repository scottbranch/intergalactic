import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/suppliers/Hero"
import Overview from "../components/suppliers/Overview"
import Partners from "../components/suppliers/Partners"
import Helmet from "react-helmet"
import { isBrowser } from "react-device-detect"

const IndexPage = () => {
  useEffect(() => {
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 100)
  }, [])

  return (
    <Layout>
      <SEO title="Suppliers" />
      <Helmet>
        <body class="suppliers" />
      </Helmet>
      <Hero />
      <Overview />
      <Partners />
    </Layout>
  )
}

export default IndexPage
