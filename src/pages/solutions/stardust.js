import React, { useEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/solution/Hero"
import Solutions from "../../components/solution/Solutions"
import KeySpecs from "../../components/solution/KeySpecs"
import UseCases from "../../components/solution/UseCases"
import Helmet from "react-helmet"
import HeroImg from "../../images/solutions/stardust.jpg"
import styled from "styled-components"
import { isBrowser } from "react-device-detect"

const Stardust = () => {
  useEffect(() => {
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 100)
  }, [])

  const specs = [
    "Size: 10” x 10” x 28”",
    "Weight: 85lbs",
    "Cooling capacity: 55 kW",
    "Passive cooling",
    "Extreme vibration and temperature survival",
  ]

  const carouselItems = [
    {
      title: "civil",
      description:
        "Avionics or electronic equipment cooling; engine, gearbox, and APU cooling; electric motor cooling; and electric systems cooling.",
    },
    {
      title: "defense",
      description: "Pod cooling, high power auxiliary systems cooling.",
    },
    {
      title: "space",
      description: "Liquid radiative cooling.",
    },
    {
      title: "land-sea",
      description:
        "High-energy laser cooling, radar cooling, vehicle cooling and heating, and engine cooling.",
    },
  ]

  return (
    <Layout>
      <SEO title="Stardust" />
      <Hero eyebrow="GS1-SD" title="Stardust" heroImg={HeroImg} />
      <Solutions description="Compact, lightweight, efficient, and highly ruggedized high-load capacity ram air cooled passive liquid chiller. Broad applications in sky, space, land, and sea. Ideal for extreme vibration and temperature environments and high loads where below-ambient temperature is not required." />
      <KeySpecs specs={specs} />
      <UseCases items={carouselItems} />
    </Layout>
  )
}

export default Stardust
