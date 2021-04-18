import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

const Solutions = props => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <StyledSection data-scroll-section>
      <Container>
        <SectionTitle className="fadein" data-scroll>
          <span>SOLUTIONS:</span>
        </SectionTitle>
        <SectionDesc>
          <span id="span-0">Compact, lightweight, efficient, and highly ruggedized high-load capacity ram air cooled passive liquid chiller. Broad applications in sky, space, land, and sea. Ideal for extreme vibration and temperature environments and high loads where below-ambient temperature is not required.</span>
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
  }
`

export default Solutions
