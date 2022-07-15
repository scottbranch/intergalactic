import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/suppliers/Hero"
import Overview from "../components/suppliers/Overview"
import Partners from "../components/suppliers/Partners"
import Helmet from "react-helmet"
import styled from "styled-components"
import { isBrowser } from "react-device-detect"

const SuppliersPage = () => {
  useEffect(() => {
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 300)
  }, [])

  const data = useStaticQuery(graphql`
    {
      allPrismicSuppliersPage {
        nodes {
          data {
            page_title {
              text
            }
            meta_description {
              text
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title={data.allPrismicSuppliersPage.nodes[0].data.page_title?.text}
        description={
          data.allPrismicSuppliersPage.nodes[0].data.meta_description?.text
        }
      />
      <Helmet>
        <body class="suppliers" />
        <link rel="canonical" href="http://ig.space/suppliers" />
      </Helmet>
      <Hero />
      <Overview />
      <Partners />
    </Layout>
  )
}

const PdfSection = styled.div``

const PdfContainer = styled.div``

export default SuppliersPage
