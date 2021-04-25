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
        <SectionTitle className="fadein" data-scroll data-scroll-offset="20%">
          <span>SOLUTIONS:</span>
        </SectionTitle>
        <SectionDesc>
          <p data-scroll data-scroll-offset="20%">
            {description}
          </p>
        </SectionDesc>
      </Container>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.cream};
`

const Container = styled.div`
  display: flex;
  padding: 100px 25px 0;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 160px 60px 250px;
    flex-direction: row;
  }

  &:after {
    display block;
    content: '';
    width: 95%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.black};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`

const SectionTitle = styled.div`
  flex: 50%;
  margin-bottom: 40px;
  opacity: 0;
  transition: opacity 1s ease;

  &.is-inview {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  span {
    font-size: 25px;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.black};
  }
`

const SectionDesc = styled.div`
  flex: 50%;

  p {
    opacity: 0;
    transition: opacity 1s ease;
    color: ${({ theme }) => theme.colors.aluminum};
    font-size: 20px;
    line-height: 28px;

    &.is-inview {
      opacity: 1;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.aluminum};
    font-size: 20px;
    line-height: 28px;

    @media screen and (min-width: 768px) {
      font-size: 25px;
      line-height: 36px;
    }
  }
`

export default Solutions
