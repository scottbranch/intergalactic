import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

const Hero = props => {
  const { eyebrow, title, type, image, subheading, altText } = props

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <StyledSection data-scroll-section type={type}>
      <HeadingContainer>
        <Paragraph className="fadein" data-scroll type={type}>
          <span>{eyebrow}</span>
        </Paragraph>
        <StyledHeading className={isLoaded && "active"} type={type}>
          <span id="span-0">{title}</span>
        </StyledHeading>
        <StyledSubheading className={isLoaded && "active"} type={type}>
          <span id="span-1">{subheading}</span>
        </StyledSubheading>
      </HeadingContainer>
      <ImgContainer>
        <img src={image} alt={altText}/>
      </ImgContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.cream};
  background-size: cover;
  background-position: center center;
  border-bottom: none;
  display: ${({ type }) => (type === "thermal" ? "block" : "flex")};
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 1200px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }
`

const HeadingContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    height: 100%;
    max-height: 100vh;
    padding: 0 65px;
  }
`

const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 39px;
  line-height: 100%;
  max-width: 850px;
  font-weight: normal;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 50px;
    line-height: 60px;
  }

  @media screen and (min-width: 1330px) {
    font-size: 95px;
    line-height: 90px;
  }
`

const StyledSubheading = styled.h2`
  font-size: 19px;
  line-height: 25px;

  @media screen and (min-width: 768px) {
    font-size: 25px;
    line-height: 36px;
  }
`

const Paragraph = styled.p`
  color: theme.colors.black;
  position: relative;
  font-size: 25px;
  line-height: 30px;
`

const ImgContainer = styled.div`
  min-width: 100%;
  margin-left: auto;
  padding-top: 68px;

  @media screen and (min-width: 768px) {
    min-width: 330px;
    display: flex;
    align-items: center;
    margin-top: -200px;
    padding-top: 0;
  }

  @media screen and (min-width: 1630px) {
    min-width: 910px;
  }

  img {
    width: 100%;
  }
`

export default Hero
