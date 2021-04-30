import React, { useEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/solution/Hero"
import Solutions from "../../components/solution/Solutions"
import KeySpecs from "../../components/solution/KeySpecs"
import UseCases from "../../components/solution/UseCases"
import HeroImg from "../../images/solutions/mcfly.jpg"
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
    "Size: 25”x25”x40”",
    "Weight: 130lbs",
    "Cooling capacity: 10 kW below ambient, cooling and heating",
    "Active cooling and heating",
    "Full performance on ground",
    "Extreme vibration and temperature survival",
  ]

  const carouselItems = [
    {
      title: "civil",
      description:
        "Cabin, cockpit, and avionics ventilation, cooling, and heating.",
    },
    {
      title: "defense",
      description:
        "Cabin, cockpit, and avionics ventilation, cooling, and heating.",
    },
    {
      title: "space",
      description:
        "Compartment and equipment ventilation, cooling, and heating.",
    },
    {
      title: "land-sea",
      description:
        "Compartment and equipment ventilation, cooling, and heating.",
    },
  ]

  return (
    <Layout>
      <SEO title="Mcfly" />
      <Hero eyebrow="GS1-MC" title="Mcfly" heroImg={HeroImg} />
      <Solutions description="Lightweight and rugged 100% electric cooling, heating, and ventilation system with broad applications in sky, space, land, and sea. Ideal for heating and cooling ventilated enclosures, such as cockpits and cabins. " />
      <KeySpecs specs={specs} />
      <UseCases items={carouselItems} />
    </Layout>
  )
}

export default Stardust
