import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

const Hero = props => {
  const { eyebrow, title, type, heroImg } = props

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <StyledSection
      data-scroll-section
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <HeadingContainer>
        <Paragraph className="fadein" data-scroll>
          <span>{eyebrow}</span>
        </Paragraph>
        <StyledHeading className={isLoaded && "active"}>
          <span id="span-0">{title}</span>
        </StyledHeading>
      </HeadingContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 1200px;
  background-color: ${({ theme }) => theme.colors.black};
  background-size: cover;
  background-position: center center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.aluminum};

  @media screen and (max-width: 768px) {
    height: 700px;
  }
`

const HeadingContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 65px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    justify-content: flex-end;
    padding: 0 25px;
  }
`

const StyledHeading = styled.h2`
  color: ${({ theme }) => theme.colors.gold};
  font-size: 95px;
  line-height: 90px;
  max-width: 850px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 40px;
  }
`

const Paragraph = styled.p`
  color: ${({ theme, type }) => theme.colors.aluminum};
  position: relative;
  font-size: 25px;
  line-height: 30px;
`

const ImgContainer = styled.div`
  min-width: 910px;
  margin-left: auto;

  img {
    width: 100%;
  }
`

export default Hero
