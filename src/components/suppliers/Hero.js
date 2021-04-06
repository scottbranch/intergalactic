import React, { useState, useEffect } from "react"
import heroImg from "../../images/suppliers/hero.jpg"
import styled, { css } from "styled-components"

const Hero = props => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  })

  return (
    <StyledSection data-scroll-section>
      <HeadingContainer>
        <StyledHeading className={isLoaded && "active"}>
          <span id="span-0">ONLY THE BEST</span>{" "}
          <span id="span-1">GO INTERGALACTIC</span>{" "}
        </StyledHeading>
        <HeroImg src={heroImg} alt="Supply part" />
      </HeadingContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #1e170a;
  position: relative;
  min-height: 970px;
`

const HeadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 60px;
`

const StyledHeading = styled.h2`
  color: ${({ theme }) => theme.colors.cream};
  z-index: 1;
`

const HeroImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 0;
  max-height: 860px;
`

export default Hero
