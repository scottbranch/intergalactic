import React, { useEffect } from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import fornax from "../../../images/solutions/parts/Fornax-electric Heaters-01.jpg"
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
    "Native high voltage DC heating (up to 800 VDC)",
    "Precision temperature control when combined with Intergalactic PDU and controller",
    "Integral RTD temperature sensing for overheat protection",
  ]

  const carouselItems = [
    {
      title: "civil",
      description: "Crew, galley, cabin, and cargo heating",
    },
    {
      title: "defense",
      description:
        "Crew, galley, cabin, and cargo heating. Liquid system and equipment extreme cold start heating",
    },
    {
      title: "space",
      description: "Electronics heating",
    },
    {
      title: "land-sea",
      description:
        "Compartment heating. Liquid system and equipment extreme cold start heating.",
    },
  ]

  return (
    <Layout className="dark">
      <SEO title="Fornax Electric Heaters" />
      <Hero eyebrow="IGE-FEH" title="Fornax Electric Heaters" image={fornax} />
      <Solutions description="The Fornax Electric Heater is a native high-voltage DC electric heater used throughout Intergalactic’s thermal management systems. The heater is implemented in liquid, air, and conductive systems." />
      <KeySpecs specs={specs} />
      <UseCases items={carouselItems} />
    </Layout>
  )
}

export default Stardust
