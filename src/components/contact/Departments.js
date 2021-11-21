import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"

const Hero = props => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  })

  const data = useStaticQuery(graphql`
  {
    allPrismicContactPage {
      nodes {
        data {
          department_heading {
            text
          }
          department_subheading {
            text
          }
          emails {
            department {
              text
            }
            email1 {
              text
            }
          }
        }
      }
    }
  }
`)

  const sectionData = data.allPrismicContactPage.nodes[0].data

  return (
    <StyledSection data-scroll-section>
      <ContactContainer id="departments">
        <h4 data-scroll data-scroll-offset="20%">
          {sectionData.department_heading?.text}
        </h4>
        <FlexContainer>
          <FlexArea data-scroll data-scroll-offset="20%">
            <ContactText>
              {sectionData.department_subheading?.text}
            </ContactText>
          </FlexArea>
          <FlexArea data-scroll data-scroll-offset="20%">
            <FlexContainerWrap>
              {sectionData.emails.map((item, index) => {
                return (
                  <>
                    <FlexArea data-scroll data-scroll-offset="20%">
                      <p>{item.department?.text}</p>
                    </FlexArea>
                    <FlexArea data-scroll data-scroll-offset="20%">
                      <a href={`mailto:${item.email1?.text}`}>
                        {item.email1?.text}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.2811 9.41728V0.417739H2.28154V1.96454L8.63947 1.95449L0.393238 10.2007L1.49809 11.3056L9.74432 3.05935L9.74432 9.42732L11.2811 9.41728Z"
                            fill="#1E170A"
                          />
                        </svg>
                      </a>
                    </FlexArea>
                  </>
                )
              })}
            </FlexContainerWrap>
          </FlexArea>
        </FlexContainer>
      </ContactContainer>
    </StyledSection>
  )
}

const ContactContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cream};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 120px 60px;

  h4 {
    opacity: 0;
    transition: opacity 1s ease;

    &.is-inview {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 120px 25px;
  }
`

const ContactText = styled.p`
  color: ${({ theme }) => theme.colors.aluminum};
  font-style: normal;
  font-size: 25px;
  line-height: 36px;
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    margin-top: 40px;
    font-size: 20px;
  }
`

const FlexContainer = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

const FlexContainerWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 90px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }

  p {
    color: ${({ theme }) => theme.colors.aluminum};
    font-style: normal;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
      margin-bottom: 10px;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.aluminum};
    font-style: normal;
    font-size: 20px;

    @media screen and (max-width: 768px) {
      display: block;
      margin-bottom: 40px;
    }
  }

  svg {
    position: relative;
    left: 10px;
  }

  svg path {
    fill: ${({ theme }) => theme.colors.aluminum};
  }
`

const FlexArea = styled.div`
  flex: 50%;
  opacity: 0;
  transition: opacity 1s ease;

  &.is-inview {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    flex: 100%;
  }
`

const StyledSubHeading = styled.p`
  color: #91897d;
  font-size: 15px;
  letter-spacing: 1px;
  font-family: ${({ theme }) => theme.fonts.cartographMedium};
`

const StyledSection = styled.section`
  width: 100%;
  position: relative;
`

const HeadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-left: 60px;
  padding-bottom: 40px;
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

  p {
    font-family: ${({ theme }) => theme.fonts.cartographMedium};
    font-size: 15px;
    letter-spacing: 1px;
    text-transform: uppercase;
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

  &:first-of-type {
    margin-right: 40px;
  }

  svg {
    margin-left: 10px;
  }
`

export default Hero
