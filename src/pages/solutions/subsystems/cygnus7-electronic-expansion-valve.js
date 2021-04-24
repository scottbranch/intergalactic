import React, { useEffect } from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
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
    "Only aerospace-grade electric expansion valve in the industry ",
    "Robust electric solenoid style ",
    "Small, lightweight, and rugged ",
    "Rated for operation in extreme vibration and typical Mil-810 severe environment ",
  ]

  const carouselItems = [
    {
      title: "civil",
      description: "Anything requiring precision refrigerant flow control.",
    },
    {
      title: "defense",
      description: "Anything requiring precision refrigerant flow control.",
    },
    {
      title: "space",
      description: "Anything requiring precision refrigerant flow control.",
    },
    {
      title: "land-sea",
      description: "Anything requiring precision refrigerant flow control.",
    },
  ]

  return (
    <Layout className="dark">
      <SEO title="Cygnus7 Electronic Expansion Valve" />
      <Hero eyebrow="IGE-C7EEV" title="Cygnus7 Electronic Expansion Valve" />
      <Solutions description="The Cygnus7 Electronic Expansion Valve is the only aerospace-grade refrigerant electronic expansion valve in the industry. Made with aerospace-grade components, the Cygnus7 EEV is designed to intelligently and surgically meter refrigerant for precision superheat control and optimal system efficiency.  " />
      <KeySpecs specs={specs} />
      <UseCases items={carouselItems} />
    </Layout>
  )
}

export default Stardust
