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
    "Lightweight, small, high energy density cold plate technology ",
    "Precision machined ",
    "Available with integrated sensors or as part of a manifold ",
    "Rated for operation in extreme vibration and typical Mil-810 severe environment ",
  ]

  const carouselItems = [
    {
      title: "civil",
      description: "Avionics and mission system equipment cooling.",
    },
    {
      title: "defense",
      description:
        "Avionics, mission system equipment cooling, and high energy component cooling. ",
    },
    {
      title: "space",
      description: "Electronics and thruster cooling.",
    },
    {
      title: "land-sea",
      description: "Electronic equipment and high energy component cooling.",
    },
  ]

  return (
    <Layout className="dark">
      <SEO title="Pisces1 Cold Plates" />
      <Hero eyebrow="IGE-P1CP" title="Pisces1 Cold Plates" />
      <Solutions description="Pisces1 Cold Plates offer lightweight, high energy density cooling for all equipment cooling needs. Precision machines, ultra lightweight, and super high efficiency." />
      <KeySpecs specs={specs} />
      <UseCases items={carouselItems} />
    </Layout>
  )
}

export default Stardust
