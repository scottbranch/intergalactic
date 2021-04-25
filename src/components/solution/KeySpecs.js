import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

const KeySpecs = props => {
  const { specs } = props

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <StyledSection data-scroll-section>
      <Container>
        <SectionTitle className="fadein" data-scroll>
          <span>KEY SPECS:</span>
        </SectionTitle>
        <SectionDesc>
          {specs.map((item, index) => (
            <span id="span-0" key={index} data-scroll data-scroll-offset="20%">
              {item}
            </span>
          ))}
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
    padding: 80px 60px 100px;
  }

  &:after {
    display block;
    content: '';
    width: 95%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.aluminum};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
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
    display: block;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.aluminum};
    opacity: 0;
    transition: opacity 1s ease;

    &.is-inview {
      opacity: 1;
    }

    @media screen and (max-width: 768px) {
      margin-top: 30px;
    }
  }
`

export default KeySpecs
