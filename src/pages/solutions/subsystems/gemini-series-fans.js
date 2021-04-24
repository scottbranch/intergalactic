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
    "Small, lightweight, efficient, quiet, and robust vane-axial and tube-axial aerospace grade fans ",
    "From 25 to 3000 CFM flow rates at pressures up to 25 in. H2O  ",
    "Configured for native 270 VDC operation and can be configured for any common power bus ",
    "Intelligent control and feedback: 0-100% speed control, speed feedback, and temperature monitoring ",
    "Rated for operation in extreme vibration and typical Mil-810 severe environment  ",
  ]

  const carouselItems = [
    {
      title: "civil",
      description:
        "Ventilation for cockpits, cabins, compartments, avionics cooling, evaporators, condensers, fuel/oil cooling systems, smoke clearing, fuel inerting systems, and ground cooling.",
    },
    {
      title: "defense",
      description:
        "Ventilation for cockpits, cabins, compartments, avionics cooling, mission equipment cooling, evaporators, condensers, fuel/oil cooling systems smoke clearing, fuel inerting systems, and ground cooling.",
    },
    {
      title: "space",
      description:
        "Ventilation for manned and unmanned air pressurized craft and onboard thermal management systems.",
    },
    {
      title: "land-sea",
      description:
        "Vehicle ventilation and cooling/heating, engine/radiator cooling, radar/electronics cooling, NBC filtering, and particle separation/scavenge. ",
    },
  ]

  return (
    <Layout className="dark">
      <SEO title="Gemini Series Fans" />
      <Hero eyebrow="IGE-GSF" title="Gemini Series Fans" />
      <Solutions description="Our Gemini Series Fans provide high efficiency, quiet operation in a small, lightweight, and rugged package. Available in tube-axial or vane-axial configurations with a flow range from 25 to 3000 CFM at pressures up to 25 in. H2O. Gemini Series Fans come standard with rugged aerospace-grade motors designed to withstand extreme conditions. They are configured for native high voltage DC operation (no power conversion) and intelligent control with speed from 0 to 100%, speed feedback, and BIT. " />
      <KeySpecs specs={specs} />
      <UseCases items={carouselItems} />
    </Layout>
  )
}

export default Stardust
