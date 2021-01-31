import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"

import SvgWordmark from "../assets/svg/wordmark"
import Innovation from "../assets/svg/innovation"
import Aerospace from "../assets/svg/aerospace"
import LogoMark from "../assets/svg/logomark"
import Scribble from "../assets/svg/scribble"
import spaceThing from "../assets/images/spacething.jpg"

const IndexPage = () => {
  const pad = d => {
    return d < 10 ? "0" + d.toString() : d.toString()
  }

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()
    let difference = +new Date(`04/30/2021`) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: pad(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: pad(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: pad(Math.floor((difference / 1000 / 60) % 60)),
        seconds: pad(Math.floor((difference / 1000) % 60)),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [hideOverlay, setHideOverlay] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft)
    }, 1000)
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer)
  }, [timeLeft])

  useEffect(() => {
    setTimeout(() => {
      setHideOverlay(true)
    }, 6000)

    setTimeout(() => {
      window.location.replace("https://airborneecs.com/")
    }, 7000)
  }, [])

  const timerComponents = []

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span>
        {
          <h5>
            {timeLeft[interval]}
            <span>:</span>
          </h5>
        }
        {<p>{interval}</p>}
      </span>
    )
  })

  return (
    <Layout>
      <SEO title="Home" />
      <Outer>
        <Overlay className={hideOverlay && "hide"}></Overlay>
        <SpaceImgOuter>
          <SpaceImg src={spaceThing} />
        </SpaceImgOuter>
        <Container>
          <ContainerLeft>
            <SvgWordmark />
            <LaunchContainer>
              <Cover></Cover>
              <LaunchText>LAUNCH IN →</LaunchText>
              <Scribble />
            </LaunchContainer>
            <Innovation />
          </ContainerLeft>
          <CountDownContainer>
            <CountDownText>
              {timerComponents.length && timerComponents}
            </CountDownText>
          </CountDownContainer>
          <ContainerRight>
            <Aerospace />
            <LogoMark />
          </ContainerRight>
        </Container>
      </Outer>
    </Layout>
  )
}

const fadeOut = keyframes`
  0% {
    opacity: 1;
    visibility: visible;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
  }

  100% {
    opacity: 1;
    visibility: visible;
  }
`

const showHeight = keyframes`
  0% {
    height: 0;
    opacity: 0;
    transform: translateY(-50px);
  }

  100% {
    height: 430px;
    opacity: 1;
    transform: translateY(0px);
  }
`

const showScribble = keyframes`
  0% {
    transform: scaleX(1);
  }

  100% {
    transform: scaleX(0);
  }
`

const Outer = styled.div`
  position: relative;
  overflow: hidden;
`

const SpaceImgOuter = styled.div`
  position: absolute;
  right: -190px;
  top: -70px;
  z-index: 50;
  max-width: 1100px;
  overflow: hidden;
  height: 0;
  opacity: 0;
  transform: translateY(-50px);
  animation: ${showHeight} 2s 1s cubic-bezier(0.49, 0, 0, 1) forwards;
`

const SpaceImg = styled.img`
  width: 100%;
`

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.black};
  z-index: 150;
  opacity: 1;
  visibility: visible;
  transition: 1s ease;
  animation: ${fadeOut} 1s 1s ease forwards;

  &.hide {
    animation: ${fadeIn} 1s ease forwards;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 40px 45px;
  justify-content: space-between;
  z-index: 100;
  position: relative;
`

const ContainerLeft = styled.div`
  height: 100%;
  display: flex;
  align-items: baseline;
  flex-direction: column;
  justify-content: space-between;
`

const LaunchContainer = styled.div`
  position: relative;
`

const Cover = styled.div`
  position: absolute;
  background: #1e170a;
  width: 100%;
  height: 60px;
  top: 206px;
  margin-right: auto;
  transform: scaleX(1);
  transform-origin: right;
  animation: ${showScribble} 0.8s 2.2s ease forwards;
`

const CountDownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LaunchText = styled.p`
  font-family: ${({ theme }) => theme.fonts.tacticRegular};
  color: ${({ theme }) => theme.colors.rust};
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 2px;
  margin: 185px 0 0;
`

const CountDownText = styled.p`
  display: flex;
  margin: 0;

  h5 {
    font-family: ${({ theme }) => theme.fonts.tacticRegular};
    font-size: 120px;
    letter-spacing: 2px;
    line-height: 120px;
    margin: 0;
    color: ${({ theme }) => theme.colors.cream};
  }

  span h5 span {
    margin: 0 3px;
  }

  span:last-child h5 span {
    display: none;
  }

  span p {
    font-family: ${({ theme }) => theme.fonts.tacticRegular};
    color: ${({ theme }) => theme.colors.rust};
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    text-align: center;
    left: -17px;
    margin-top: 50px;
  }

  span:last-child p {
    left: 0;
  }
`

const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`

export default IndexPage
