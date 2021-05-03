import React, { useEffect } from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import hydra from "../../../images/solutions/parts/HydraX-Pump-01.jpg"
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
    "Small, lightweight, efficient, and rugged electric pumps ",
    "Positive displacement radial piston style ",
    "Up to 25 gpm at 160 psid  ",
    "Compatible with water, glycols, oils, and fuels",
    "Intelligent control and feedback: 0-100% speed control, speed feedback, and temperature monitoring ",
    "Configured for native 270 VDC operation and can be configured for any common power bus ",
    "Rated for operation in extreme vibration and typical Mil-810 severe environment ",
  ]

  const carouselItems = [
    {
      title: "civil",
      description:
        "Any liquid pumping application: water, coolants, oils, fuels, refrigerants, etc. ",
    },
    {
      title: "defense",
      description:
        "Any liquid pumping application: water, coolants, oils, fuels, refrigerants, etc. ",
    },
    {
      title: "space",
      description:
        "Any liquid pumping application: water, coolants, oils, fuels, refrigerants, etc. ",
    },
    {
      title: "land-sea",
      description:
        "Any liquid pumping application: water, coolants, oils, fuels, refrigerants, etc. ",
    },
  ]

  return (
    <Layout className="dark">
      <SEO title="HydraX Pump" />
      <Hero eyebrow="IGE-HXP" title="HydraX Pump" image={hydra} />
      <Solutions description="The HydraX Pump uses proprietary design to bring ultimate performance and efficiency in a small, light package. The centerpiece of the HydraX Pump is our high voltage DC positive displacement radial piston pumps, which are configured for intelligent speed control from 0 to 100%, speed feedback, and BIT. As with all our subsystems and equipment, The HydraX Pump is 270 DCA native." />
      <KeySpecs specs={specs} />
      <UseCases items={carouselItems} />
    </Layout>
  )
}

export default Stardust
