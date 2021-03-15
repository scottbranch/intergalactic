import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/homepage/Hero"
import ValueProp from "../components/homepage/ValueProp"
import ImageFloat from "../components/homepage/ImageFloat"
import DoubleImage from "../components/homepage/DoubleImage"
import BoxesChecked from "../components/homepage/BoxesChecked"
import CtaSection from "../components/homepage/CtaSection"
import CircleSection from "../components/homepage/CircleSection"
import Helmet from "react-helmet"
import styled, { keyframes } from "styled-components"
import { isBrowser } from "react-device-detect"

const IndexPage = () => {
  useEffect(() => {
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 100)
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Helmet>
        <body class="home" />
      </Helmet>
      <Hero />
      <ValueProp />
      <ImageFloat />
      <DoubleImage />
      <CircleSection />
      <BoxesChecked />
      <CtaSection />
    </Layout>
  )
}

export default IndexPage
