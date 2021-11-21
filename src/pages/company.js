import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
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
    }, 300)
  }, [])

  const data = useStaticQuery(graphql`
  {
    allPrismicCompanyPage {
      nodes {
        data {
          meta_description {
            text
          }
          page_title {
            text
          }
        }
      }
    }
  }
`)

  return (
    <Layout>
      <SEO title={data.allPrismicCompanyPage.nodes[0].data.page_title.text} description={data.allPrismicCompanyPage.nodes[0].data.meta_description.text}/>
      <Helmet>
        <body class="company" />
        <link rel="canonical" href="http://ig.space/company" />
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
