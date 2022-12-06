import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import heroImg from "../../images/suppliers/hero.jpg"
import styled, { css } from "styled-components"

const Hero = props => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  })

  const data = useStaticQuery(graphql`
    {
      allPrismicSuppliersPage {
        nodes {
          data {
            heading {
              text
            }
          }
        }
      }
    }
  `)

  const sectionData = data.allPrismicSuppliersPage.nodes[0].data

  return (
    <StyledSection data-scroll-section>
      <HeadingContainer>
        <StyledHeading className={isLoaded && "active"}>
          <span id="span-0">{sectionData.heading?.text}</span>{" "}
        </StyledHeading>
      </HeadingContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 70vh;
  background-color: #1e170a;
  position: relative;
  min-height: 780px;
  background-image: url(${heroImg});
  background-size: cover;
  background-position: center center;
`

const HeadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 60px;

  @media screen and (max-width: 768px) {
    padding-left: 25px;
    margin-bottom: 230px;
  }
`

const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.colors.cream};
  z-index: 1;
  font-size: 76px;
  line-height: 68px;
  font-weight: normal;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    font-size: 33px;
    font-size: 52px;
    line-height: 100%;
    span {
      word-break: none;
    }
  }
`

const HeroImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 0;
  max-height: 860px;
`

export default Hero
