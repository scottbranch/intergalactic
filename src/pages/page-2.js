import React, { useEffect } from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { isBrowser } from "react-device-detect"

const SecondPage = () => {
  useEffect(() => {
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 100)
  }, [])

  return (
    <Layout>
      <div data-scroll-section>
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        <h1>Hi people</h1>
        <p>Welcome to my quick Locomotive scroll starter.</p>
        <h2>Locomotive Scroll and innerHeight</h2>
        <p>
          Any component that changes the innerHeight of the page should trigger
          the update method.
        </p>
        <p>
          In our case <code>window.scroll.update()</code>.{" "}
          <a href="https://github.com/fcisio/gatsby-locomotivescroll-starter/blob/master/src/components/collapsible.js">
            See the `collapsible` component
          </a>
          .
        </p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <a href="/page-2/">Go to page 2</a> <br />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
        </div>
        <div>
          <p data-scroll data-scroll-speed="2" style={{ background: "red" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            veritatis totam, iste hic quibusdam doloribus, odio aliquid
            molestiae sunt rem. Minima, adipisci modi! Cumque aperiam delectus
            pariatur quia quo.
          </p>
        </div>
        <a href="/">Go back to the homepage</a>
      </div>
    </Layout>
  )
}

export default SecondPage
