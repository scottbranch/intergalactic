import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"

const Hero = props => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  })

  const scrollToHandler = el => {
    const scrollEl = document.getElementById(el)
    window.scroll.scrollTo(scrollEl)
  }

  const data = useStaticQuery(graphql`
    {
      allPrismicContactPage {
        nodes {
          data {
            statement {
              text
            }
          }
        }
      }
    }
  `)

  const sectionData = data.allPrismicContactPage.nodes[0].data

  return (
    <HeroWrapper data-scroll-section>
      <StyledSection></StyledSection>
      <ContactInfo>
        <p data-scroll data-scroll-offset="20%">
          {sectionData.statement?.text}
        </p>
        <div>
          <PageLink
            data-scroll
            data-scroll-offset="20%"
            href="javascript:void(0)"
            onClick={e => scrollToHandler("contactForm")}
          >
            Contact form
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1.63036H8.89696L8.91017 8.11881L0.792603 0L0 0.785478L8.12418 8.91089H1.62484L1.63804 10H10V1.63036Z"
                fill="#2D261E"
              />
            </svg>
          </PageLink>
          <PageLink
            data-scroll
            data-scroll-offset="20%"
            href="javascript:void(0)"
            onClick={e => scrollToHandler("departments")}
          >
            Contact departments
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1.63036H8.89696L8.91017 8.11881L0.792603 0L0 0.785478L8.12418 8.91089H1.62484L1.63804 10H10V1.63036Z"
                fill="#2D261E"
              />
            </svg>
          </PageLink>
        </div>
      </ContactInfo>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.cream};
`

const StyledSection = styled.section`
  width: 100%;
  padding-top: 110px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.cream};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  @media screen and (max-width: 768px) {
    padding-top: 100px;
  }
`

const HeadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-left: 60px;
  padding-bottom: 40px;

  @media screen and (max-width: 768px) {
    padding-left: 25px;
  }
`

const StyledHeading = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  z-index: 1;
`

const ContactInfo = styled.div`
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    padding: 0 25px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.cartographMedium};
    text-transform: uppercase;
    opacity: 0;
    font-size: 15px;
    letter-spacing: 1px;
    transition: opacity 1s ease;

    &.is-inview {
      opacity: 1;
    }
  }
`
const PageLink = styled.a`
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.cartographMedium};
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  letter-spacing: 1px;
  opacity: 0;
  transition: opacity 1s ease;

  &.is-inview {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }

  &:first-of-type {
    margin-right: 40px;
  }

  svg {
    margin-left: 10px;
  }
`

export default Hero
