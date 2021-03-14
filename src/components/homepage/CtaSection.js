import React from "react"
import AnchorLink from "../AnchorLink.js"
import Line from "../Line.js"
import styled from "styled-components"

const CtaSection = () => {
  return (
    <StyledSection data-scroll-section>
      <StyledHeading>Could your moonshot  be any cooler? </StyledHeading>
      <CtaContainer>
        <Line />
        <CopyBlock>
          <p>
            Collaborative engineering is our jam. How about we connect your
            people and our people to talk shop?
          </p>
          <AnchorLink to="/test">Schedule a demo</AnchorLink>
        </CopyBlock>
        <CopyBlock>
          <p>
            Meet with our engineers and system designers. No obligations. No
            slick salespeople.
          </p>
          <AnchorLink to="/test">Let's Talk</AnchorLink>
        </CopyBlock>
      </CtaContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 225px 60px;
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.cream};
`

const StyledHeading = styled.h3`
  max-width: 1255px;
`

const CtaContainer = styled.div`
  display: flex;
  margin: 80px 0 0 120px;

  p {
    margin-bottom: 65px;
  }
`

const CopyBlock = styled.div`
  max-width: 325px;
  margin-top: 20px;

  &:first-child {
    margin-right: 200px;
  }
`

export default CtaSection
