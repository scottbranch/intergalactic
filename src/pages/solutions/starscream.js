import React, { useEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/solution/Hero"
import Solutions from "../../components/solution/Solutions"
import KeySpecs from "../../components/solution/KeySpecs"
import UseCases from "../../components/solution/UseCases"
import Helmet from "react-helmet"
import HeroImg from "../../images/solutions/starscream.jpg"
import styled from "styled-components"
import { isBrowser } from "react-device-detect"

const Stardust = () => {
  useEffect(() => {
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 100)
  }, [])

  const specs = [
    "Size: 10”x 10”x 28”",
    "Weight: 115lbs",
    "Cooling capacity: 5 kW below ambient",
    "Active cooling",
    "Extreme vibration and temperature survival",
  ]

  const carouselItems = [
    {
      title: "civil",
      description: "Avionics and precision equipment cooling.",
    },
    {
      title: "defense",
      description: "Pod cooling and precision equipment cooling.",
    },
    {
      title: "space",
      description: "Launch vehicle and satellite systems cooling.",
    },
    {
      title: "land-sea",
      description: "Precision temperature control for sensitive equipment.",
    },
  ]

  return (
    <Layout>
      <SEO title="Starscream" />
      <Hero eyebrow="GS1-SX" title="Starscream" heroImg={HeroImg} />
      <Solutions description=" Lightweight, efficient, and highly rugged precision liquid chiller with broad applications in air, space, land, and sea. Ideal for extreme vibration and temperature environments." />
      <KeySpecs specs={specs} />
      <UseCases items={carouselItems} />
    </Layout>
  )
}

export default Stardust
