import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/homepage/Hero"
import ValueProp from "../components/homepage/ValueProp"
import ImageFloat from "../components/homepage/ImageFloat"
import DoubleImage from "../components/homepage/DoubleImage"
import BoxesChecked from "../components/homepage/BoxesChecked"
import CtaSection from "../components/homepage/CtaSection"
import styled, { keyframes } from "styled-components"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <ValueProp />
      <ImageFloat />
      <DoubleImage />
      <BoxesChecked />
      <CtaSection />
    </Layout>
  )
}

export default IndexPage
