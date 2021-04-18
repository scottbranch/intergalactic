import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import heroImg from '../../images/solution/hero.jpg';

const Hero = props => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <StyledSection data-scroll-section>
      <HeadingContainer>
        <Paragraph className="fadein" data-scroll>
          <span>GS1-SD</span>
        </Paragraph>
        <StyledHeading className={isLoaded && "active"}>
          <span id="span-0">Stardust</span>
        </StyledHeading>
      </HeadingContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 1200px;
  background-image: url('${heroImg}');
  background-size: cover;
  background-position: center center;
  background-color: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.aluminum};
`

const HeadingContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 65px;
  justify-content: center;
`

const StyledHeading = styled.h2`
  color: ${({ theme }) => theme.colors.gold};
  font-size: 95px;
  line-height: 90px;
`

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.aluminum};
  position: relative;
  font-size: 25px;
  line-height: 30px;
`

export default Hero
