import React from "react"
import AnchorLink from "../AnchorLink.js"
import Line from "../Line.js"
import styled from "styled-components"

const CtaSection = () => {
  return (
    <StyledSection data-scroll-section>
      <StyledHeading data-scroll data-scroll-offset="30%">
        <span id="span-0">Could your moonshot</span>{" "}
        <span id="span-1">be any cooler?</span>{" "}
      </StyledHeading>
      <CtaContainer>
        <Line />
        <CopyBlock className="first-block">
          <p className="fadein" data-scroll data-scroll-offset="20%">
            <span>
              Collaborative engineering is our jam. How about we connect your
              people and our people to talk shop?
            </span>
          </p>
          <AnchorLink to="/contact">Schedule a demo</AnchorLink>
        </CopyBlock>
        <CopyBlock>
          <p className="fadein" data-scroll data-scroll-offset="20%">
            <span>
              Meet with our engineers and system designers. No obligations. No
              slick salespeople.
            </span>
          </p>
          <AnchorLink to="/contact">Let's Talk</AnchorLink>
        </CopyBlock>
      </CtaContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 100px 25px;
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.cream};

  @media screen and (min-width: 768px) {
    padding: 225px 60px;
  }
`

const StyledHeading = styled.h3`
  #span-1 {
    margin: 0;
    @media screen and (min-width: 768px) {
      margin-left: 550px;
    }
  }
`

const CtaContainer = styled.div`
  display: flex;
  margin: 80px 0 0 0;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin: 80px 0 0 120px;
    flex-direction: row;
  }

  p {
    margin-top: 25px;
    margin-bottom: 70px;
    @media screen and (min-width: 768px) {
      margin-bottom: 65px;
      margin-top: 0;
    }
  }
`

const CopyBlock = styled.div`
  max-width: 325px;
  margin-top: 20px;

  /* this wont work idk why */
  &:first-child {
    margin-right: 200px;
  }

  &.first-block {
    margin: 0 0 45px;
    @media screen and (min-width: 768px) {
      margin: 45px 200px 45px 0;
    }
  }
`

export default CtaSection
