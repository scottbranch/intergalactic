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
    "Oil-less, non-corrosive orbiting scroll compressor technology ",
    "Small, lightweight, efficient, and robust design",
    "Configured for native 270 VDC operation and can be configured for any common power bus ",
    "Intelligent control and feedback: 0-100% speed control, speed feedback, temperature monitoring ",
    "Rated for operation in extreme vibration and typical Mil-810 severe environment ",
  ]

  const carouselItems = [
    {
      title: "civil",
      description:
        "Oil-free vapor cycle environmental control systems and oil-free compressed air applications (OBOGGS, pneumatic systems, and inerting systems).",
    },
    {
      title: "defense",
      description:
        "Oil-free vapor cycle environmental control systems and oil-free compressed air applications (OBOGGS, pneumatic systems, and inerting systems).",
    },
    {
      title: "space",
      description:
        "Oil-free vapor cycle environmental control systems and oil-free compressed air applications.",
    },
    {
      title: "land-sea",
      description:
        "Oil-free vapor cycle environmental control systems and oil-free compressed air applications.",
    },
  ]

  return (
    <Layout className="dark">
      <SEO title="Libra4 Scroll Compressor" />
      <Hero eyebrow="IGE-L4SC" title="Libra4 Scroll Compressor" />
      <Solutions description="The Libra4 Scroll Compressor is an oil-less orbiting device that provides quiet high-efficiency performance in a small, lightweight, and rugged package. The Libra4 Scroll Compressor enables the oil-less vapor cycle cooling technology found throughout Intergalactic’s integrated thermal management systems. The Libra4 comes configured for native high voltage DC operation (no power conversion) and intelligent control with speed from 0 to 100%, speed feedback, and BIT. " />
      <KeySpecs specs={specs} />
      <UseCases items={carouselItems} />
    </Layout>
  )
}

export default Stardust
