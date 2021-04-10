import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

const Hero = props => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  })

  return (
    <StyledSection data-scroll-section>
      <ContactContainer>
        <h4>Contact departments</h4>
        <StyledSubHeading className="fadein" data-scroll data-scroll-offset="20%">
          <span>
            CONTACT US :: 03
          </span>
        </StyledSubHeading>
        <FlexContainer>
          <FlexArea>
            <p><a href="mailto:phonehome@ig.space">Email us</a> corresponding your inquiery.</p>
          </FlexArea>
          <FlexArea>
            <p>Technical support</p>
            <a href="mailto:support@ig.space">
              support(at)ig.space 
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2811 9.41728V0.417739H2.28154V1.96454L8.63947 1.95449L0.393238 10.2007L1.49809 11.3056L9.74432 3.05935L9.74432 9.42732L11.2811 9.41728Z" fill="#1E170A"/>
              </svg>
            </a>
            <p>Press inquiries</p>
            <a href="mailto:commslink@ig.space">
              commslink(at)ig.space
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2811 9.41728V0.417739H2.28154V1.96454L8.63947 1.95449L0.393238 10.2007L1.49809 11.3056L9.74432 3.05935L9.74432 9.42732L11.2811 9.41728Z" fill="#1E170A"/>
              </svg>
            </a>
            <p>Supplier info</p>
            <a href="mailto:supplyuport@ig.space">
              supplyuport(at)ig.space
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2811 9.41728V0.417739H2.28154V1.96454L8.63947 1.95449L0.393238 10.2007L1.49809 11.3056L9.74432 3.05935L9.74432 9.42732L11.2811 9.41728Z" fill="#1E170A"/>
              </svg>
            </a>
            <p>Building or bidding a project</p>
            <a href="mailto:launch@ig.space">
              launch (at)ig.space
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2811 9.41728V0.417739H2.28154V1.96454L8.63947 1.95449L0.393238 10.2007L1.49809 11.3056L9.74432 3.05935L9.74432 9.42732L11.2811 9.41728Z" fill="#1E170A"/>
              </svg>
            </a>
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
`

const FlexContainer = styled.div`
  display: flex;
`

const FlexArea = styled.div`
  flex: 50%;
`

const StyledSubHeading = styled.p`
  color: #91897D;
  font-size: 14px;
  letter-spacing: 3px;
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
  
  &:first-of-type {
    margin-right: 40px;
  }

  svg {
    margin-left: 10px;
  }
`

export default Hero
