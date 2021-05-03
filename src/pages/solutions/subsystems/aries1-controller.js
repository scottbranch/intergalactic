import React, { useEffect } from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import aries from "../../../images/solutions/parts/aries1-controller-01.jpg"
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
    "Small, lightweight, and highly rugged – operates in extreme vibration, temperatures, water, fluids, EMI, lightning, high power microwave, etc.",
    "Proprietary bare metal code provides robust and secure operation",
    "Provides intelligent control, BIT, and health monitoring of all thermal management system components ",
    "Intelligently communicates with aircraft or platform – compatible with all major communication buses (Ethernet, Canbus, Serial, ARINC, etc.)",
    "Configured for native 270 VDC operation and can be configured for any common power bus  ",
    "Seamlessly integrates with Carina1 Power Distribution Unit",
  ]

  const carouselItems = [
    {
      title: "civil",
      description:
        "Anything that requires full ECS autonomous control (compressor speeds, fan speeds, load management) with user input or zone thermal control with user input (temperature set, fan speed). ",
    },
    {
      title: "defense",
      description:
        "Anything that requires precision temperature control (+/-0.1C), intelligent control, and data logging. ",
    },
    {
      title: "space",
      description:
        "Anything that requires precision temperature control (+/-0.1C), intelligent control, and data logging. ",
    },
    {
      title: "land-sea",
      description:
        "Anything that requires precision temperature control (+/-0.1C), intelligent control, and data logging. ",
    },
  ]

  return (
    <Layout className="dark">
      <SEO title="Aries1 Controller" />
      <Hero eyebrow="IGE-A1C" title="Aries1 Controller" image={aries} />
      <Solutions description="The Aries1 Controller is the brains of a very intelligent thermal management operation. It provides intelligent management of all thermal management and environmental control subsystems to produce optimally efficient operation. The Aries1 Controller has built-in test and predictive health monitoring to intelligently adjust thermal controls and avoid wasted power draw. Regardless of the craft, vehicle, or machine, the Aries1 Controller communicates with the host platform or aircraft, sending and receiving control messages and providing running status updates." />
      <KeySpecs specs={specs} />
      <UseCases items={carouselItems} />
    </Layout>
  )
}

export default Stardust
