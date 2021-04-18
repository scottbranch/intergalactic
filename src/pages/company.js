import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/company/Hero"
import DoubleImage from "../components/company/DoubleImage"
import Team from "../components/company/Team"
import Recruit from "../components/company/Recruit"
import Values from "../components/company/Values"
import Helmet from "react-helmet"
import styled from "styled-components"
import { isBrowser } from "react-device-detect"

const Company = () => {
  useEffect(() => {
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 100)
  }, [])

  return (
    <Layout>
      <SEO title="Company" />
      <Helmet>
        <body class="company" />
      </Helmet>
      <Hero />
      <DoubleImage />
      <Team />
      <Recruit />
      <Values />
    </Layout>
  )
}

export default Company
