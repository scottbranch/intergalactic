import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/industries/Hero"
import ImageRow from "../components/industries/ImageRow"
import Carousel from "../components/Carousel"
import Helmet from "react-helmet"
import styled from "styled-components"
import { isBrowser } from "react-device-detect"

const Industries = () => {
  useEffect(() => {
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 1000)
  }, [])

  const data = useStaticQuery(graphql`
    {
      allPrismicIndustriesPage {
        nodes {
          data {
            slider {
              slider_description {
                text
              }
              slider_image {
                url
              }
              slider_title {
                text
              }
            }
          }
        }
      }
    }
  `)

  const sliderData = data.allPrismicIndustriesPage.nodes[0].data

  return (
    <Layout>
      <SEO title="Industries" />
      <Helmet>
        <body class="industries has-carousel" />
      </Helmet>
      <Hero />
      <ImageRow />
      <Carousel carouselItems={sliderData.slider} />
    </Layout>
  )
}

export default Industries
