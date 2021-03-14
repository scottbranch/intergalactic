import React, { useState, useEffect } from "react"
import homepagehero from "../../images/homepage/homepage-hero.jpg"
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
          <span id="span-0">Heat</span> <span id="span-1">Heat is no</span>{" "}
          <span id="span-2">no</span> <span id="span-3">longer</span>{" "}
          <span id="span-4">a barrier</span>
        </StyledHeading>
      </HeadingContainer>
      <TextBottom>
        <div>
          <Title className="eyebrow">Those days are over</Title>
          <Description>
            For decades, innovation in aerospace has been limited by old methods
            of thermal management that just can’t keep up.
          </Description>
        </div>
        <div>
          <Title className="eyebrow">Welcome to Intergalactic</Title>
          <Description>
            This is the era of further, faster and cooler. Welcome to the new
            age of aerospace technology.
          </Description>
        </div>
      </TextBottom>
    </StyledSection>
  )
}

function textDelay() {
  let styles = ""

  for (let i = 0; i < 5; i += 1) {
    styles += `
       #headerline-${i} {
         transition-delay: ${i * 50}ms;
       }
     `
  }

  return css`
    ${styles}
  `
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${homepagehero});
  background-size: cover;
  position: relative;
  min-height: 970px;
`

const HeadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  left: -235px;
  top: -50px;

  span {
    &:nth-of-type(3),
    &:nth-of-type(4),
    &:nth-of-type(5) {
      left: 497px;
      position: relative;
    }
  }
`

export default Hero
