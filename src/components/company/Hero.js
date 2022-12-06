import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import companyhero from "../../images/company/hero.jpg"
import styled, { css } from "styled-components"

const Hero = props => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToHandler = el => {
    const scrollEl = document.getElementById(el)
    window.scroll.scrollTo(scrollEl)
  }

  const data = useStaticQuery(graphql`
    {
      allPrismicCompanyPage {
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

  const sectionData = data.allPrismicCompanyPage.nodes[0].data

  return (
    <StyledSection data-scroll-section>
      <HeadingContainer>
        <StyledHeading className={isLoaded && "active"}>
          <span id="span-0">{sectionData.heading?.text}</span>
        </StyledHeading>
        <Paragraph className="fadein" data-scroll>
          <a
            href="javascript:void(0)"
            onClick={e => scrollToHandler("companyOverview")}
          >
            Overview{" "}
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1.63036H8.89696L8.91017 8.11881L0.792603 0L0 0.785478L8.12418 8.91089H1.62484L1.63804 10H10V1.63036Z"
                fill="#ffffff"
              />
            </svg>{" "}
          </a>
          <a
            href="javascript:void(0)"
            onClick={e => scrollToHandler("companyTeam")}
          >
            Dream Team{" "}
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1.63036H8.89696L8.91017 8.11881L0.792603 0L0 0.785478L8.12418 8.91089H1.62484L1.63804 10H10V1.63036Z"
                fill="#ffffff"
              />
            </svg>{" "}
          </a>
          <a
            href="javascript:void(0)"
            onClick={e => scrollToHandler("companyCareers")}
          >
            Careers{" "}
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1.63036H8.89696L8.91017 8.11881L0.792603 0L0 0.785478L8.12418 8.91089H1.62484L1.63804 10H10V1.63036Z"
                fill="#ffffff"
              />
            </svg>{" "}
          </a>
        </Paragraph>
      </HeadingContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${companyhero});
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
  align-items: center;
  padding: 0 25px;
  justify-content: flex-end;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 0 65px;
    justify-content: space-between;
    flex-direction: row;
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
  font-size: 52px;
  line-height: 100%;
  font-weight: normal;

  @media screen and (min-width: 768px) {
    font-size: 76px;
    line-height: 68px;
    max-width: 50vw;
  }
`

const Paragraph = styled.p`
  color: white;
  right: 0;
  position: relative;
  font-size: 25px;
  width: 100%;
  max-width: 360px;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    right: 100px;
    margin: 0;
  }

  a {
    color: white;
    text-decoration: none;
    border-top: 1px solid white;
    display: block;
    padding: 20px 0;
    font-size: 20px;

    @media screen and (min-width: 768px) {
      font-size: 25px;
    }
  }
`

export default Hero
