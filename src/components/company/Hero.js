import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import companyhero from "../../images/company/hero.jpg"
import styled, { css } from "styled-components"

const Hero = props => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <StyledSection data-scroll-section>
      <HeadingContainer>
        <StyledHeading className={isLoaded && "active"}>
          <span id="span-0">Born out of necessity</span>
        </StyledHeading>
        <Paragraph className="fadein" data-scroll>
          <span>Every sector gets cooler with Intergalactic.</span>
        </Paragraph>
      </HeadingContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 780px;
  background-image: url(${companyhero});
  background-size: cover;
  position: relative;
`

const HeadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 65px;
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
  font-size: 76px;
  line-height: 68px;
`

const Paragraph = styled.p`
  color: white;
  right: 100px;
  position: relative;
  font-size: 25px;
`

export default Hero
