import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

const Hero = props => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  })

  return (
    <HeroWrapper data-scroll-section>
      <StyledSection>
        <HeadingContainer>
          <StyledHeading className={isLoaded && "active"}>
            <span id="span-0">WHAT'S THE MISSION?</span>{" "}
          </StyledHeading>
        </HeadingContainer>
      </StyledSection>
      <ContactInfo>
          <p>Our partnership begins here.</p>
          <div>
            <PageLink href="#">
              Contact form
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1.63036H8.89696L8.91017 8.11881L0.792603 0L0 0.785478L8.12418 8.91089H1.62484L1.63804 10H10V1.63036Z" fill="#2D261E"/>
              </svg>
            </PageLink>
            <PageLink href="#">
              Contact departments
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1.63036H8.89696L8.91017 8.11881L0.792603 0L0 0.785478L8.12418 8.91089H1.62484L1.63804 10H10V1.63036Z" fill="#2D261E"/>
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
  padding-top: 400px;
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
    font-family: ${({theme}) => theme.fonts.cartographMedium};
    text-transform: uppercase;
  }
`
const PageLink = styled.a`
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  font-family: ${({theme}) => theme.fonts.cartographMedium};
  text-decoration: none;
  display: inline-block;

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
