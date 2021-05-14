import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/solutions/Hero"
import OurSolutions from "../components/solutions/OurSolutions"
import Systems from "../components/solutions/Systems"
import Equipment from "../components/solutions/Equipment"
import Contact from "../components/solutions/Contact"
import Shortcuts from "../components/solutions/Shortcuts"
import Compliant from "../components/solutions/Compliant"
import Helmet from "react-helmet"
import styled from "styled-components"
import { isBrowser } from "react-device-detect"

const Solutions = () => {
  useEffect(() => {
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 1000)
  }, [])

  return (
    <Layout>
      <SEO title="Solutions" />
      <Helmet>
        <body class="solution" />
        <link rel="canonical" href="http://ig.space/solutions" />
      </Helmet>
      <Hero />
      <OurSolutions />
      <Systems />
      <Equipment />
      <Contact />
      <Shortcuts />
      <Compliant />
    </Layout>
  )
}

export default Solutions
