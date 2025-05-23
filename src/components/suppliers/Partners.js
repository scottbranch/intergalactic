import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from "gatsby-link"
import Arrow from "../Arrow"
import styled from "styled-components"

const ValueProp = props => {
  const data = useStaticQuery(graphql`
    {
      allPrismicSuppliersPage {
        nodes {
          data {
            partners_title {
              text
            }
            partners_subtitle {
              text
            }
          }
        }
      }
    }
  `)

  const sectionData = data.allPrismicSuppliersPage.nodes[0].data

  return (
    <StyledSection data-scroll-section>
      <InnerContainer>
        <div>
          <StyledHeading data-scroll data-scroll-offset="30%">
            <span id="span-0">{sectionData.partners_title?.text}</span>
          </StyledHeading>
        </div>
        <TextContainer>
          <p className="fadein" data-scroll data-scroll-offset="20%">
            <span>{sectionData.partners_subtitle?.text}</span>
          </p>
          <p className="fadein" data-scroll data-scroll-offset="20%">
            <PartnerLink to="/contact">
              Contact supply port <Arrow />
            </PartnerLink>
            <a
              href="https://prismic-io.s3.amazonaws.com/igspace/cf4bd41d-b4bd-4b43-9cec-3b4873a0f95f_SQRM-001_+Supplier+Quality+Requirements++11.17.2022.pdf"
              target="_blank"
            >
              Supplier quality assurance requirements <Arrow />
            </a>
            <a
              href="https://www.geaerospace.com/company/doing-business"
              target="_blank"
            >
              Terms &amp; conditions <Arrow />
            </a>
            <a
              href="https://igspace.cdn.prismic.io/igspace/ZkZvOyol0Zci9ORw_SPRM-001%2CSupplierPackagingRequirements05.15.2024.pdf"
              target="_blank"
            >
              Supplier Packaging Requirements <Arrow />
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
