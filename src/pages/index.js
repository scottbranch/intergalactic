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

    // setTimeout(() => {
    //   window.location.replace("https://airborneecs.com/")
    // }, 7000)
  }, [])

  const timerComponents = []

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span class="time-slot">
        {
          <div>
            <p class="number">
              {timeLeft[interval]}
              <span>:</span>
            </p>
          </div>
        }
        {<p class="days">{interval}</p>}
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
            <StyledInnovation />
          </ContainerLeft>
          <CountDownContainer>
            <CountDownText>
              {timerComponents.length && timerComponents}
            </CountDownText>
          </CountDownContainer>
          <ContainerRight>
            <StyledAerospace />
            <StyledLogoMark />
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
  height: 100%;
`

const SpaceImgOuter = styled.div`
  position: absolute;
  right: -190px;
  top: 50%;
  z-index: 50;
  max-width: 1100px;
  overflow: hidden;
  height: 0;
  opacity: 0;
  margin-top: -465px;
  animation: ${showHeight} 2s 1s cubic-bezier(0.49, 0, 0, 1) forwards;
`

const SpaceImg = styled.img`
  width: 100%;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
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
  display: none;

  &.hide {
    animation: ${fadeIn} 1s ease forwards;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px 15px;
  justify-content: space-between;
  z-index: 100;
  position: relative;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 40px 45px;
  }
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
  margin-bottom: 70px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
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
  margin: 0;

  @media screen and (min-width: 768px) {
    margin: 185px 0 0;
  }
`

const CountDownText = styled.p`
  display: flex;
  margin: 0;
  flex-direction: column;
  margin-bottom: 70px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 0;
  }

  .time-slot {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: start;
    margin-bottom: 15px;

    @media screen and (min-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 0;
    }

    > div {
      min-width: 120px;

      @media screen and (min-width: 1125px) {
        min-width: 150px;
      }
    }

    .days {
      bottom: 2px;

      @media screen and (min-width: 768px) {
        bottom: 0;
      }
    }

    &:nth-of-type(1) .days {
      left: 0;
      @media screen and (min-width: 768px) {
        left: -22px;
      }
    }

    &:nth-of-type(2) .days {
      left: 0;
      @media screen and (min-width: 768px) {
        left: -20px;
      }
    }

    &:nth-of-type(3) .days {
      left: 0;
      @media screen and (min-width: 768px) {
        left: -12px;
      }
    }
  }

  .number {
    font-family: ${({ theme }) => theme.fonts.tacticRegular};
    font-size: 65px;
    letter-spacing: 2px;
    line-height: 100%;
    margin: 0;
    color: ${({ theme }) => theme.colors.cream};
    text-align: left;

    @media screen and (min-width: 768px) {
      text-align: center;
    }

    @media screen and (min-width: 930px) {
      font-size: 90px;
    }

    @media screen and (min-width: 1125px) {
      font-size: 120px;
    }
  }

  span .number span {
    margin: 0 3px;
    display: none;

    @media screen and (min-width: 768px) {
      display: inline;
    }
  }

  span:last-child .number span {
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
    margin-top: 0;

    @media screen and (min-width: 768px) {
      margin-top: 50px;
    }
  }

  span:last-child p {
    left: 0;
  }
`

const StyledAerospace = styled(Aerospace)`
  position: fixed;
  top: 24px;
  right: 24px;

  @media screen and (min-width: 768px) {
    position: relative;
    top: 0;
    right: 0;
  }
`

const StyledLogoMark = styled(LogoMark)`
  position: fixed;
  bottom: 44px;
  right: 24px;

  @media screen and (min-width: 768px) {
    position: relative;
    bottom: 0;
    right: 0;
  }
`

const StyledInnovation = styled(Innovation)`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`

const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`

export default IndexPage
