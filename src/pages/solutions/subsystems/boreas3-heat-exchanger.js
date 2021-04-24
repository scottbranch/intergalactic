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
    "Proprietary, patent-pending microtube technology",
    "Precision laser-welded",
    "Best-in-class heat rejection per weight and volume",
    "World-class size, weight, and pressure drop characteristics vs. traditional brazed plate fin technology",
    "Engine, hydraulic, gearbox oil coolers",
    "Refrigerant evaporator and condensers (air and liquid exchange)",
    "Liquid to air and air to air, including air cycle machine heat exchangers",
    "Low tube and shell side pressure drops reduces compressor, pump, and fan power",
    "Fouling resistant and easy to clean",
    "Easily modified in shape to fit various form factors and toggle heat rejection up or down",
    "Accepts any combination of fluids: air, water, glycols, oils, fuels, refrigerants, or chemicals ",
    "Highly robust for a wide range of vibration, temperature, shock, and corrosive environments",
  ]

  const carouselItems = [
    {
      title: "civil",
      description:
        "Fuel/oil coolers, evaporators, condensers, bleed air coolers, and air cycle machine air to air heat exchangers",
    },
    {
      title: "defense",
      description:
        "Fuel/oil coolers, evaporators, condensers, bleed air coolers, and air cycle machine air to air heat exchangers",
    },
    {
      title: "space",
      description: "Radiative coolers",
    },
    {
      title: "land-sea",
      description:
        "Liquid system coolers, radiators, evaporators, and condensers",
    },
  ]

  return (
    <Layout className="dark">
      <SEO title="boreas3 heat exchanger" />
      <Helmet>
        <body class="boreas3 heat exchanger" />
      </Helmet>
      <Hero eyebrow="IGE-B3HE" title="Boreas3 Heat Exchanger" />
      <Solutions description="The Intergalactic Heat Exchanger is the heart of our industry-leading thermal management systems. We innovated and perfected our proprietary microtube technology, which allows exponentially higher heat rejection per ounce and square inch of surface area. The Boreas3 Heat Exchanger provides the highest heat transfer density per size and weight by a factor of 3 over the next best available technology (brazed plate fin). Its highly ruggedized design allows for operation with nearly any fluid and in extreme aircraft environments, including high temperature engine bleed." />
      <KeySpecs specs={specs} />
      <UseCases items={carouselItems} />
    </Layout>
  )
}

export default Stardust
