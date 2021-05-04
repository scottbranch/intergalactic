import React, { useEffect } from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import dorado from "../../../images/solutions/parts/dorado-ST-flow-control Valve-01.jpg"
import Hero from "../../../components/solution/subsystems/Hero"
import Solutions from "../../../components/solution/subsystems/Solutions"
import KeySpecs from "../../../components/solution/subsystems/KeySpecs"
import UseCases from "../../../components/solution/subsystems/UseCases"
import Helmet from "react-helmet"
import styled from "styled-components"
import { isBrowser } from "react-device-detect"

const Stardust = () => {
  useEffect(() => {
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 100)
  }, [])

  const specs = [
    "Only intelligent coolant flow control valve available in aerospace ",
    "0-100% flow control, up to 40 gpm",
    "Complete temperature, pressure, and valve position feedback ",
    "Compatible with all fluids, including water, glycols, and oils",
  ]

  const carouselItems = [
    {
      title: "civil",
      description:
        "Anything requiring cooling system coolant distribution and control or other liquid systems flow control and distribution.",
    },
    {
      title: "defense",
      description:
        "Anything requiring cooling system coolant distribution and control or other liquid systems flow control and distribution. ",
    },
    {
      title: "space",
      description:
        "Anything requiring cooling system coolant distribution and control or other liquid systems flow control and distribution.",
    },
    {
      title: "land-sea",
      description:
        "Anything requiring cooling system coolant distribution and control or other liquid systems flow control and distribution.",
    },
  ]

  return (
    <Layout className="dark">
      <SEO title="Dorado ST Liquid Flow Control Valve" />
      <Hero
        eyebrow="IGE-DSTFCV"
        title="Dorado ST Liquid Flow Control Valve"
        image={dorado}
      />
      <Solutions description="The Dorado ST Flow Control Valve is the only intelligent coolant flow control valve available in the industry. The Dorado ST and features 0-100% flow control with minimal pressure drop at full flow for high system efficiency. The Dorado ST is compatible with all coolants including pure water. " />
      <KeySpecs specs={specs} />
      <UseCases items={carouselItems} />
    </Layout>
  )
}

export default Stardust
