import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import companyhero from "../../images/solutions/hero.jpg"
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
          <span id="span-0">SOLUTIONS</span>
        </StyledHeading>
        <Paragraph className="fadein" data-scroll>
          <span>What could you build if heat wasn’t a limiting factor?</span>
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
  background-position: bottom center;

  @media screen and (max-width: 768px) {
    height: 600px;
  }
`

const HeadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 65px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`

const StyledHeading = styled.h2`
  color: ${({ theme }) => theme.colors.cream};
  font-size: 76px;
  line-height: 68px;
  flex: 50%;

  @media screen and (max-width: 768px) {
    flex: initial;
    margin-top: 200px;
  }
`

const Paragraph = styled.p`
  color: white;
  position: relative;
  font-size: 25px;
  flex: 50%;

  @media screen and (max-width: 768px) {
    flex: initial;
  }
`

export default Hero
