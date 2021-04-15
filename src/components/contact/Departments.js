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
        <FlexContainer>
          <FlexArea>
            <ContactText><a href="mailto:phonehome@ig.space">Email us</a> corresponding your inquiry.</ContactText>
          </FlexArea>
          <FlexArea>
            <FlexContainerWrap>
              <FlexArea>
              <p>Technical support</p>
              </FlexArea>
              <FlexArea>
              <a href="mailto:support@ig.space">
                support(at)ig.space 
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.2811 9.41728V0.417739H2.28154V1.96454L8.63947 1.95449L0.393238 10.2007L1.49809 11.3056L9.74432 3.05935L9.74432 9.42732L11.2811 9.41728Z" fill="#1E170A"/>
                </svg>
              </a>
              </FlexArea>
              <FlexArea>
                <p>Press inquiries</p>
              </FlexArea>
              <FlexArea>
                <a href="mailto:commslink@ig.space">
                  commslink(at)ig.space
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2811 9.41728V0.417739H2.28154V1.96454L8.63947 1.95449L0.393238 10.2007L1.49809 11.3056L9.74432 3.05935L9.74432 9.42732L11.2811 9.41728Z" fill="#1E170A"/>
                  </svg>
                </a>
              </FlexArea>
              <FlexArea>
                <p>Supplier info</p>
              </FlexArea>
              <FlexArea>
                <a href="mailto:supplyuport@ig.space">
                  supplyuport(at)ig.space
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2811 9.41728V0.417739H2.28154V1.96454L8.63947 1.95449L0.393238 10.2007L1.49809 11.3056L9.74432 3.05935L9.74432 9.42732L11.2811 9.41728Z" fill="#1E170A"/>
                  </svg> 
                </a>
              </FlexArea>
              <FlexArea>
                <p>Building or bidding a project</p>
              </FlexArea>
              <FlexArea>
                <a href="mailto:launch@ig.space">
                  launch (at)ig.space
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2811 9.41728V0.417739H2.28154V1.96454L8.63947 1.95449L0.393238 10.2007L1.49809 11.3056L9.74432 3.05935L9.74432 9.42732L11.2811 9.41728Z" fill="#1E170A"/>
                  </svg>
                </a>
              </FlexArea>
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
`

const ContactText = styled.p`
  color: ${({ theme }) => theme.colors.rust};
  font-style: normal;
  font-size: 25px;
  line-height: 36px;
  margin-top: 80px;

  a {
    color: ${({ theme }) => theme.colors.rust};
  }
`

const FlexContainer = styled.div`
  display: flex;
`

const FlexContainerWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 90px;
  
  p {
    color: ${({ theme }) => theme.colors.rust};
    font-style: normal;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 40px;
  }  

  a {
    color: ${({ theme }) => theme.colors.rust};
    font-style: normal;
    font-size: 20px;
  }

  svg {
    position: relative;
    left: 10px;
  }

  svg path {
    fill: ${({ theme }) => theme.colors.rust};
  }
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
