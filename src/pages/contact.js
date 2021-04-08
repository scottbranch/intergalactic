import React, { useEffect } from "react"
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
    }, 100)
  }, [])

  return (
    <Layout>
      <SEO title="Contact" />
      <Helmet>
        <body class="suppliers" />
      </Helmet>
      <Hero />
      <Form />
      <Departments />
    </Layout>
  )
}

export default ContactPage
