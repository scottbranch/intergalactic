import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

const Solutions = props => {
  const { description } = props

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <StyledSection data-scroll-section>
      <Container>
        <SectionTitle className="fadein" data-scroll>
          <span>SUMMARY:</span>
        </SectionTitle>
        <SectionDesc>
          <span id="span-0" data-scroll data-scroll-offset="20%">
            {description}
          </span>
        </SectionDesc>
      </Container>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`

const Container = styled.div`
  display: flex;
  padding: 160px 60px 250px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 80px 25px 100px;
  }

  &:after {
    display none;
    content: '';
    width: 95%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.aluminum};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (min-width: 768px) {
      display: block;
    }
  }
`

const SectionTitle = styled.div`
  flex: 50%;

  span {
    font-size: 25px;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.gold};
  }
`

const SectionDesc = styled.div`
  flex: 50%;

  span {
    color: ${({ theme }) => theme.colors.aluminum};
    font-size: 25px;
    line-height: 36px;
    opacity: 0;
    transition: opacity 1s ease;

    @media screen and (max-width: 768px) {
      font-size: 20px;
      line-height: 31px;
    }

    &.is-inview {
      opacity: 1;
    }

    @media screen and (max-width: 768px) {
      display: block;
      margin-top: 30px;
    }
  }
`

export default Solutions
