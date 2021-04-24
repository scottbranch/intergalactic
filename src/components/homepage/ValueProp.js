import React from "react"
import incremental from "../../images/homepage/incremental.jpg"
import AnchorLink from "../AnchorLink"
import Line from "../Line"
import styled from "styled-components"

const ValueProp = props => {
  return (
    <StyledSection data-scroll-section>
      <InnerContainer>
        <div>
          <StyledHeading data-scroll data-scroll-offset="30%">
            <span id="span-0">Incremental</span>
            <span id="span-1">Doesn’t Fly</span>
            <span id="span-2">Anymore.</span>
          </StyledHeading>
          <TextContainer>
            <Line />
            <p className="fadein" data-scroll data-scroll-offset="20%">
              <span>
                The zero-risk mentality of yesterday can’t fuel the
                zero-boundaries breakthroughs of tomorrow. Across every
                aerospace sector, an innovation imperative is empowering the new
                guard and leaving the incrementalists in the afterburn.
              </span>
            </p>
            <p className="fadein" data-scroll data-scroll-offset="20%">
              <span>
                We are here to enable bold ambition, whether it’s
                commercializing supersonic flight, pioneering interplanetary
                travel, or whatever else is on your zero-boundaries agenda.
              </span>
            </p>
          </TextContainer>
          <AnchorLink to="/solutions">Our Solutions</AnchorLink>
        </div>
        <div data-scroll data-scroll-speed="1">
          <ValueImg src={incremental} />
        </div>
      </InnerContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 155px 0 85px;
  background: ${({ theme }) => theme.colors.cream};
  overflow: hidden;
  min-height: 970px;
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

  p {
    margin-top: 40px;
    max-width: 400px;

    &:nth-of-type(1) {
      margin-right: 40px;
    }
  }
`

const ValueImg = styled.img`
  max-width: 675px;
`

export default ValueProp
