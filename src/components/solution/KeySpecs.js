import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

const KeySpecs = props => {
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
          <span id="span-0">Size: 10” x 10” x 28”</span>
          <span id="span-0">Weight: 85lbs</span>
          <span id="span-0">Cooling capacity: 55 kW below ambient</span>
          <span id="span-0">Passive cooling</span>
          <span id="span-0">Extreme vibration and temperature survival</span>
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
  }
`

export default KeySpecs
