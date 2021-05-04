import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import homepagehero from "../../images/homepage/homepage-hero.jpg"
import CookieBar from "../../components/CookieBar"
import styled, { css } from "styled-components"

const Hero = props => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  })

  const data = useStaticQuery(graphql`
    {
      allPrismicHomepageTemplate {
        nodes {
          data {
            hero_subtext_1 {
              text
            }
            hero_subtext_2 {
              text
            }
            hero_subtitle_1 {
              text
            }
            hero_subtitle_2 {
              text
            }
          }
        }
      }
    }
  `)

  const homepageData = data.allPrismicHomepageTemplate.nodes[0].data

  return (
    <>
      <StyledSection data-scroll-section id="homepage-hero">
        <HeadingContainer>
          <StyledHeading className={isLoaded && "active"}>
            <span id="span-0">Heat</span> <span id="span-1">Heat is no</span>{" "}
            <span id="span-2">Longer a</span>
            <span id="span-3">barrier</span>
            <span id="span-4">barrier</span>
          </StyledHeading>
        </HeadingContainer>
        <CookieTrigger
          data-scroll-call={"cookie"}
          data-scroll
          data-scroll-repeat
        ></CookieTrigger>
      </StyledSection>
      <CookieBar id="cookie-bar" />
    </>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${homepagehero});
  background-size: cover;
  position: relative;
  min-height: 100vh;
  background-position: center;

  @media screen and (min-width: 768px) {
    min-height: 970px;
  }
`

const HeadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`

const TextBottom = styled.div`
  position: absolute;
  bottom: 45px;
  left: 65px;
  color: ${({ theme }) => theme.colors.gold};
  display: flex;

  > div {
    max-width: 540px;
    border-top: 1px solid ${({ theme }) => theme.colors.cream};
    padding-top: 20px;
  }

  > div:last-child {
    margin-left: 25%;
  }
`

const Title = styled.p`
  text-transform: uppercase;
  margin-bottom: 10px;
  display: block;
`

const Description = styled.p`
  margin: 0;
`

const StyledHeading = styled.h2`
  color: ${({ theme }) => theme.colors.cream};
  margin-left: 25px;
  line-height: 80%;

  @media screen and (min-width: 768px) {
    margin-left: 0;
    position: relative;
  }

  #span-0,
  #span-4 {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  span {
    &:nth-of-type(3) {
      margin-left: 0;
      @media screen and (min-width: 768px) {
        margin-left: 100px;
        position: relative;
      }
      @media screen and (min-width: 1260px) {
        margin-left: 377px;
        position: relative;
      }
    }
    &:nth-of-type(4),
    &:nth-of-type(5) {
      margin-left: 0;
      @media screen and (min-width: 768px) {
        margin-left: 400px;
        position: relative;
      }
      @media screen and (min-width: 1260px) {
        margin-left: 820px;
        position: relative;
      }
    }
  }
`

const CookieTrigger = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
`

export default Hero
