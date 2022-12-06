import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import industrieshero from "../../images/industries/hero.jpg"
import styled, { css } from "styled-components"

const Hero = props => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const data = useStaticQuery(graphql`
    {
      allPrismicIndustriesPage {
        nodes {
          data {
            heading {
              text
            }
            subheading {
              text
            }
          }
        }
      }
    }
  `)

  const heroData = data.allPrismicIndustriesPage.nodes[0].data

  return (
    <StyledSection data-scroll-section>
      <HeadingContainer>
        <StyledHeading className={isLoaded && "active"}>
          <span id="span-0">{heroData.heading?.text}</span>
        </StyledHeading>
        <Paragraph className="fadein" data-scroll>
          <span>{heroData.subheading?.text}</span>
        </Paragraph>
      </HeadingContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${industrieshero});
  background-size: cover;
  position: relative;
  background-position: center;

  @media screen and (min-width: 768px) {
    height: 780px;
  }
`

const HeadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 25px;
  flex-direction: column;
  align-items: baseline;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    padding: 0 65px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
`

const Title = styled.p`
  text-transform: uppercase;
  margin-bottom: 10px;
  display: block;
`

const Description = styled.p`
  margin: 0;
`

const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.colors.cream};
  font-size: 76px;
  line-height: 68px;
  font-weight: normal;

  @media screen and (max-width: 768px) {
    margin-bottom: 230px;
    font-size: 52px;
    line-height: 100%;
  }
`

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.cream};
  right: 0;
  position: relative;
  font-size: 20px;
  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    margin-left: 60px;
    font-size: 25px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1460px) {
    right: 100px;
  }
`

export default Hero
