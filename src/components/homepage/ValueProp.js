import React from "react"
import valueprop from "../../images/homepage/value-prop.jpg"
import styled from "styled-components"

const ValueProp = props => {
  return (
    <StyledSection>
      <InnerContainer>
        <div>
          <StyledHeading>
            <span>Incremental</span>
            <span>Doesn’t Fly</span>
            <span>Anymore.</span>
          </StyledHeading>
          <TextContainer>
            <p>
              The zero-risk mentality of yesterday can’t fuel the
              zero-boundaries breakthroughs of tomorrow. Across every aerospace
              sector, an innovation imperative is empowering the new guard and
              leaving the incrementalists in the afterburn.
            </p>
            <p>
              We are here to enable bold ambition, whether it’s commercializing
              supersonic flight, pioneering interplanetary travel, or whatever
              else is on your zero-boundaries agenda.
            </p>
          </TextContainer>
        </div>
        <div>
          <ValueImg src={valueprop} />
        </div>
      </InnerContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 155px 0 85px;
  background: ${({ theme }) => theme.colors.cream};
`

const StyledHeading = styled.h2`
  span:nth-of-type(2) {
    left: 115px;
  }
`

const TextContainer = styled.div`
  display: flex;
`

const InnerContainer = styled.div`
  display: flex;
  padding: 0 60px;
  justify-content: space-between;
`

const ValueImg = styled.img`
  max-width: 675px;
`

export default ValueProp
