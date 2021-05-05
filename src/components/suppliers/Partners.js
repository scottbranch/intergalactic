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
            <PartnerLink to="/contact">
              Contact supply port <Arrow />
            </PartnerLink>
            <a
              href="https://prismic-io.s3.amazonaws.com/igspace/1252633c-5b5c-4808-9def-56f4b62370b4_Intergalactic+AS9100+certification.pdf"
              target="_blank"
            >
              Supplier quality assurance requirements <Arrow />
            </a>
            <a
              href="https://prismic-io.s3.amazonaws.com/igspace/86f1d824-779c-4e74-8857-b3565c5557cf_PUR-PO-001+Intergalactic+ECS+Terms+and+Conditions.pdf"
              target="_blank"
            >
              Terms &amp; conditions <Arrow />
            </a>
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

  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
`

const StyledHeading = styled.h3`
  font-size: 48px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  span:nth-of-type(2) {
    left: 115px;
  }
`

const StyledSubHeading = styled.p`
  color: #91897d;
  font-size: 15px;
  letter-spacing: 1px;
  font-family: ${({ theme }) => theme.fonts.cartographMedium};
`

const InnerContainer = styled.div`
  display: flex;
  padding: 0 60px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 25px;
  }
`

const TextContainer = styled.div`
  margin: 0;
  width: 540px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }

  p {
    margin-top: 0;
    font-size: 25px;
    line-height: 36px;
    color: ${({ theme }) => theme.colors.aluminum};

    @media screen and (max-width: 768px) {
      margin-top: 20px;
      font-size: 20px;
      line-height: 31px;
    }
  }

  span {
    max-width: 400px;
  }

  a {
    display: flex;
    align-items: center;
    margin: 15px 0;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.aluminum};

    &:first-of-type {
      margin-top: 40px;
    }

    svg {
      margin-left: 10px;

      path {
        fill: ${({ theme }) => theme.colors.aluminum};
      }
    }
  }
`

const PartnerLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 15px 0;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.aluminum};

  &:first-of-type {
    margin-top: 40px;
  }

  svg {
    margin-left: 10px;

    path {
      fill: ${({ theme }) => theme.colors.aluminum};
    }
  }
`

export default ValueProp
