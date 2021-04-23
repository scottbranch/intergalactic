import React, { useEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/solution/Hero"
import Solutions from "../../components/solution/Solutions"
import KeySpecs from "../../components/solution/KeySpecs"
import UseCases from "../../components/solution/UseCases"
import HeroImg from "../../images/solutions/gozer.jpg"
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
    "Size: 40”x40”x40”",
    "Weight: 200 lbs",
    "Cooling capacity: 150 kW below ambient",
    "Passive cooling",
  ]

  const carouselItems = [
    {
      title: "civil",
      description:
        "Avionics or electronic equipment cooling; engine, gearbox, or APU cooling; electric motor cooling; and electric systems cooling.",
    },
    {
      title: "defense",
      description:
        "Large aircraft systems cooling, high-energy laser systems cooling.",
    },
    {
      title: "land-sea",
      description:
        "High-energy laser systems cooling, radar cooling, vehicle cooling and heating.",
    },
  ]

  return (
    <Layout>
      <SEO title="Gozer" />
      <Hero eyebrow="GS1-GZ" title="Gozer" heroImg={HeroImg} />
      <Solutions description="Very high load capacity ram air cooled passive liquid chiller, with targeted applications in sky, land, and sea. Ideal for large aircraft systems cooling and high energy laser systems cooling." />
      <KeySpecs specs={specs} />
      <UseCases items={carouselItems} />
    </Layout>
  )
}

export default Stardust
