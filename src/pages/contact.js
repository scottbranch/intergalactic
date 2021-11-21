import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/contact/Hero"
import Form from "../components/contact/Form"
import Departments from "../components/contact/Departments"
import Helmet from "react-helmet"
import { isBrowser } from "react-device-detect"

const ContactPage = () => {
  useEffect(() => {
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 300)
  }, [])

  const data = useStaticQuery(graphql`
  {
    allPrismicContactPage {
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
    <Layout className="dark">
      <SEO title={data.allPrismicContactPage.nodes[0].data.page_title.text} description={data.allPrismicContactPage.nodes[0].data.meta_description.text} />
      <Helmet>
        <body class="suppliers" />
        <link rel="canonical" href="http://ig.space/contact" />
      </Helmet>
      <Hero />
      <Form />
      <Departments />
    </Layout>
  )
}

export default ContactPage
