import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/homepage/Hero"
import ValueProp from "../components/homepage/ValueProp"
import ImageFloat from "../components/homepage/ImageFloat"
import styled, { keyframes } from "styled-components"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <ValueProp />
      <ImageFloat />
    </Layout>
  )
}

export default IndexPage
