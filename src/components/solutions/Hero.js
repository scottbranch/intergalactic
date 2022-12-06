import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import companyhero from "../../images/solutions/hero.jpg"
import styled, { css } from "styled-components"

const Hero = props => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const data = useStaticQuery(graphql`
    {
      allPrismicSolutions {
        nodes {
          data {
            heading {
              text
            }
            sub_heading {
              text
            }
          }
        }
      }
    }
  `)

  const heroData = data.allPrismicSolutions.nodes[0].data

  return (
    <StyledSection data-scroll-section>
      <HeadingContainer>
        <StyledHeading className={isLoaded && "active"}>
          <span id="span-0">{heroData.heading?.text}</span>
        </StyledHeading>
        <Paragraph className="fadein" data-scroll>
          <span>{heroData.sub_heading?.text}</span>
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
    height: 700px;
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
    justify-content: initial;
    padding: 0 25px;
    align-items: initial;
  }
`

const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.colors.cream};
  flex: 50%;
  font-size: 76px;
  line-height: 68px;
  font-weight: normal;

  @media screen and (max-width: 768px) {
    flex: initial;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 52px;
    line-height: 100%;
  }
`

const Paragraph = styled.p`
  position: relative;
  font-size: 25px;
  line-height: 36px;
  flex: 50%;
  color: ${({ theme }) => theme.colors.cream};

  @media screen and (max-width: 768px) {
    flex: initial;
    font-size: 20px;
    line-height: 28px;
  }
`

export default Hero
