import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import gadget from '../../../images/solution/gadget.jpg';

const Hero = props => {

  const {
    eyebrow,
    title,
    type
  } = props

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
      </HeadingContainer>
        <ImgContainer>
          <img src={gadget}/>
        </ImgContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 1200px;
  background-color: ${({theme}) => theme.colors.cream};
  background-size: cover;
  background-position: center center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  display: ${({type}) => type === 'thermal' ? 'block' : 'flex'};
`

const HeadingContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 65px;
  justify-content: center;
`

const StyledHeading = styled.h2`
  color: ${({theme}) => theme.colors.black};
  font-size: 95px;
  line-height: 90px;
  max-width: 850px;
`

const Paragraph = styled.p`
  color: theme.colors.black;
  position: relative;
  font-size: 25px;
  line-height: 30px;
`

const ImgContainer = styled.div`
  min-width: 910px;
  margin-left: auto;

  img {
    width: 100%;
  }
`

export default Hero
