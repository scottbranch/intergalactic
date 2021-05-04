import React, { useEffect } from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import orion from "../../../images/solutions/parts/OrionXD-Accumulator-01.jpg"
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
    "Gas charged accumulator for sealed liquid systems ",
    "Intelligent sensing for piston position for servicing and leak detection",
    "Non-stick double sealed dynamic piston technology",
    "Available for system volumes up to 20 gallons and scalable for any system volume ",
  ]

  const carouselItems = [
    {
      title: "civil",
      description:
        "Anything requiring sealed coolant system expansion and pressure management.",
    },
    {
      title: "defense",
      description:
        "Anything requiring sealed coolant system expansion and pressure management.",
    },
    {
      title: "space",
      description:
        "Anything requiring sealed coolant system expansion and pressure management.",
    },
    {
      title: "land-sea",
      description:
        "Anything requiring sealed coolant system expansion and pressure management.",
    },
  ]

  return (
    <Layout className="dark">
      <SEO title="OrionXD Accumulator" />
      <Hero eyebrow="IGE-OXDA" title="OrionXD Accumulator" image={orion} />
      <Solutions description="The OrionXD Accumulator is gas-charged to allow for coolant expansion in sealed liquid systems. The OrionXD is configurable with sensor options for position and leak detection feedback, uses non-stick double sealed dynamic piston technology, and is customizable to any specification." />
      <KeySpecs specs={specs} />
      <UseCases items={carouselItems} />
    </Layout>
  )
}

export default Stardust
