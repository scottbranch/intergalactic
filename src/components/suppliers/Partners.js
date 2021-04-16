import React from "react"
import Link from "gatsby-link"
import Arrow from "../Arrow"
import styled from "styled-components"

const ValueProp = props => {
  return (
    <StyledSection data-scroll-section>
      <InnerContainer>
        <div>
          <StyledHeading data-scroll data-scroll-offset="30%">
            <span id="span-0">Current Partners</span>
          </StyledHeading>
        </div>
        <TextContainer>
            <p className="fadein" data-scroll data-scroll-offset="20%">
              <span>
                Contact us for purchase orders, scorecards, or other information.
              </span>
            </p>
            <p className="fadein" data-scroll data-scroll-offset="20%">
              <PartnerLink to="/">
                Contact supply port <Arrow/>
              </PartnerLink>
              <PartnerLink to="/">
                Supplier quality assurance requirements <Arrow/>
              </PartnerLink>
              <PartnerLink to="/">
                Terms &amp; conditions <Arrow/>
              </PartnerLink>
            </p>
          </TextContainer>
      </InnerContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 155px 0 155px;
  background: ${({ theme }) => theme.colors.cream};
  overflow: hidden;
`

const StyledHeading = styled.h3`
  font-size: 48px;
  span:nth-of-type(2) {
    left: 115px;
  }
`

const StyledSubHeading = styled.p`
  color: #91897D;
  font-size: 14px;
  letter-spacing: 3px;
  font-family: ${({ theme }) => theme.fonts.cartographMedium};
`

const InnerContainer = styled.div`
  display: flex;
  padding: 0 60px;
  justify-content: space-between;
`

const TextContainer = styled.div`
  margin: 0;
  width: 540px;

  p {
    margin-top: 0;
    font-size: 25px;
    line-height: 36px;
    color: ${({ theme }) => theme.colors.rust};
  }

  span {
    max-width: 400px;
  }
`

const PartnerLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 30px 0;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.rust};

  &:first-of-type {
    margin-top: 80px;
  }

  svg {
    margin-left: 10px;

    path {
      fill: ${({ theme }) => theme.colors.rust};
    }
  }
`

export default ValueProp
