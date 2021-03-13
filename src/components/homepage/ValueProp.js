import React from "react"
import valueprop from "../../images/homepage/value-prop.jpg"
import AnchorLink from "../link"
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
          <AnchorLink to="/test">Our Solutions</AnchorLink>
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
  overflow: hidden;
`

const StyledHeading = styled.h3`
  span:nth-of-type(2) {
    left: 115px;
  }
`

const InnerContainer = styled.div`
  display: flex;
  padding: 0 60px;
  justify-content: space-between;
  align-items: center;

  div:first-child {
    margin-right: 20px;
  }

  div:last-child {
    margin-left: 20px;
  }
`

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px 0 80px;

  &:before {
    content: "";
    width: 100px;
    height: 1px;
    background: ${({ theme }) => theme.colors.black};
    display: block;
    position: absolute;
  }

  p {
    margin-top: 40px;
    max-width: 400px;

    &:first-child {
      margin-right: 20px;
    }
  }
`

const ValueImg = styled.img`
  max-width: 675px;
`

export default ValueProp
