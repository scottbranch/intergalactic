import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/suppliers/Hero"
import Overview from "../components/suppliers/Overview"
import Partners from "../components/suppliers/Partners"
import Helmet from "react-helmet"
import { isBrowser } from "react-device-detect"
import { jsPDF } from "jspdf"

const SuppliersPage = () => {
  useEffect(() => {
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 300)

    // const doc = new jsPDF({
    //   unit: "in",
    //   format: [8.5, 11],
    // })

    // doc.text("Hello world!", 0.5, 0.5)
    // doc.save("a4.pdf")
  }, [])

  function generatePdf() {
    const pdfContainer = document.getElementById("pdf-container")

    var doc = new jsPDF("p", "px", "a3", true)

    doc.html(pdfContainer, {
      callback: function (doc) {
        let binary = doc.output()
        return binary ? btoa(binary) : ""
      },
      x: 0,
      y: 0,
    })

    // var doc = new jsPdf()
    // doc.text("jsPDF to Mail", 40, 30)
    // var binary = doc.output()
    // return binary ? btoa(binary) : ""
  }

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": e.target.getAttribute("name"),
        "form-pdf": generatePdf(),
      }),
    })
      .then(() => console.log("success"))
      .catch(error => alert(error))
  }

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
      <div id="pdf-container" data-scroll-section>
        <h1>NDA PDF</h1>
        <div>
          <p style={{ fontSize: "12px", lineHeight: "12px" }}>
            some stuff here for testing
          </p>
        </div>
        <div>
          <p style={{ fontSize: "12px", lineHeight: "12px" }}>
            some stuff here for testing
          </p>
        </div>
        <div>
          <input value="input value" />
        </div>

        <form
          name="nda"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <div hidden aria-hidden="true">
            <label>
              Don't fill this out if you're human:
              <input name="bot-field" />
            </label>
          </div>
          <button type="submit">Generate PDF</button>
        </form>
      </div>
      <Overview />
      <Partners />
    </Layout>
  )
}

export default SuppliersPage
