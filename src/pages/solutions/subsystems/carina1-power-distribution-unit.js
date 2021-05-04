import React, { useEffect } from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import carina from "../../../images/solutions/parts/carina1-PDU-01.jpg"
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
    "Intelligent thermal management or ECS power management, control, and feedback  ",
    "Distributes and controls power channels to thermal management system components, commanded by system controller (ideally the Intergalactic Aries1 Controller)",
    "Integrated, programmable solid state circuit breaker protection on every output channel ",
    "Voltage and current measurement and feedback on every output channel, enabling intelligent power management ",
    "EMI, lightning, and high power microwave hardened with industry-leading EMI filter",
    "Rated for operation in extreme vibration and typical Mil-810 severe environment ",
  ]

  const carouselItems = [
    {
      title: "civil",
      description:
        "Anything requiring high voltage DC intelligent power distribution and management, including solid state control, programmable circuit breaker protection, power measurement and monitoring, power quality monitoring, EMI filtering, and lightning protection.",
    },
    {
      title: "defense",
      description:
        "Anything requiring high voltage DC intelligent power distribution and management, including solid state control, programmable circuit breaker protection, power measurement and monitoring, power quality monitoring, EMI filtering, and lightning protection.",
    },
    {
      title: "space",
      description:
        "Anything requiring high voltage DC intelligent power distribution and management, including solid state control, programmable circuit breaker protection, power measurement and monitoring, power quality monitoring, EMI filtering, and lightning protection.",
    },
    {
      title: "land-sea",
      description:
        "Anything requiring high voltage DC intelligent power distribution and management, including solid state control, programmable circuit breaker protection, power measurement and monitoring, power quality monitoring, EMI filtering, and lightning protection.",
    },
  ]

  return (
    <Layout className="dark">
      <SEO title="Carina1 Power Distribution Unit" />
      <Hero
        eyebrow="IGE-C1PDU"
        title="Carina1 Power Distribution Unit"
        image={carina}
      />
      <Solutions description="The Carina1 Power Distribution Unit offers intelligent power management and control to maximize efficiency. The Carina1 PDU filters, distributes, and controls power provided to thermal management or ECS components while offering integral, programmable solid state circuit breaker protection and voltage/current feedback. The Carina1 PDU seamlessly integrates with the Aries1 Controller in Intergalactic’s precision-built thermal management systems." />
      <KeySpecs specs={specs} />
      <UseCases items={carouselItems} />
    </Layout>
  )
}

export default Stardust
