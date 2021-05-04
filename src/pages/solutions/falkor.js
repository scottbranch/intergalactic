import React, { useEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/solution/Hero"
import Solutions from "../../components/solution/Solutions"
import KeySpecs from "../../components/solution/KeySpecs"
import UseCases from "../../components/solution/UseCases"
import HeroImg from "../../images/solutions/falkor.jpg"
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
    "Weight: 250 lbs",
    "Cooling capacity: 25 kW below ambient",
    "Active cooling",
  ]

  const carouselItems = [
    {
      title: "defense",
      description:
        "Large aircraft systems cooling, high-energy laser systems cooling. ",
    },
    {
      title: "land-sea",
      description:
        "High-energy laser systems cooling, radar cooling, ground vehicle cooling and heating.",
    },
  ]

  return (
    <Layout>
      <SEO title="Falkor" />
      <Hero eyebrow="GS1-FK" title="Falkor" heroImg={HeroImg} />
      <Solutions description="High capacity, aerospace-grade electric vapor cycle chiller system with targeted applications in sky, land, and sea. Ideal for cooling large aircraft systems or high-energy laser weapons." />
      <KeySpecs specs={specs} />
      <UseCases items={carouselItems} />
    </Layout>
  )
}

export default Stardust
