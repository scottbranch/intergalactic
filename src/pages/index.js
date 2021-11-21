import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/homepage/Hero"
import Welcome from "../components/homepage/Welcome"
import ValueProp from "../components/homepage/ValueProp"
import ImageFloat from "../components/homepage/ImageFloat"
import StaticImage from "../components/homepage/StaticImage"
import DoubleImage from "../components/homepage/DoubleImage"
import BoxesChecked from "../components/homepage/BoxesChecked"
import CtaSection from "../components/homepage/CtaSection"
import CircleSection from "../components/homepage/CircleSection"
import Carousel from "../components/Carousel"
import Helmet from "react-helmet"
import styled from "styled-components"
import { isBrowser } from "react-device-detect"

const IndexPage = () => {
  useEffect(() => {
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 1000)
  }, [])

  const data = useStaticQuery(graphql`
    {
      allPrismicHomepageTemplate {
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

  const homepageData = data.allPrismicHomepageTemplate.nodes[0].data
  return (
    <Layout>
      <SEO title={homepageData.page_title.text} description={homepageData.meta_description.text}/>
      <Helmet>
        <body class="home has-carousel" />
        <link rel="canonical" href="http://ig.space" />
      </Helmet>
      <Hero />
      <Welcome />
      <ValueProp />
      <StaticImage />
      <DoubleImage />
      <ImageFloat />
      <Carousel carouselItems={homepageData.slider} />
      <CircleSection />
      <BoxesChecked />
      <CtaSection />
    </Layout>
  )
}

export default IndexPage
