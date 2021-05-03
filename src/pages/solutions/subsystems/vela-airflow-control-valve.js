import React, { useEffect } from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import airflow from "../../../images/solutions/parts/airflow-control-valve-01.jpg"
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
    "Lightweight, small, high accuracy airflow control valves",
    "Rated for operation in extreme vibration and typical Mil-810 severe environment ",
  ]

  const carouselItems = [
    {
      title: "civil",
      description: "ECS control, defog control, airflow mode selection",
    },
    {
      title: "defense",
      description: "ECS control, defog control, airflow mode selection ",
    },
    {
      title: "space",
      description: "Compartment airflow control",
    },
    {
      title: "land-sea",
      description: "Defog control, airflow selection control",
    },
  ]

  return (
    <Layout className="dark">
      <SEO title="Vela Airflow Control Valve" />
      <Hero
        eyebrow="IGE-VACV"
        title="Vela Airflow Control Valve"
        image={airflow}
      />
      <Solutions description="Vela Airflow Control Valves offer compact, lightweight, accurate air flow control for all ventilation and cooling needs." />
      <KeySpecs specs={specs} />
      <UseCases items={carouselItems} />
    </Layout>
  )
}

export default Stardust
