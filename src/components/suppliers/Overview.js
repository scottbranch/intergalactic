import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import overviewImg from "../../images/suppliers/overview.jpg"
import Line from "../Line"
import Link from "gatsby-link"
import styled from "styled-components"

const ValueProp = props => {
  const data = useStaticQuery(graphql`
    {
      allPrismicSuppliersPage {
        nodes {
          data {
            info_description {
              html
            }
            info_title {
              text
            }
            info_image {
              url
            }
          }
        }
      }
    }
  `)

  const sectionData = data.allPrismicSuppliersPage.nodes[0].data

  return (
    <StyledSection data-scroll-section>
      <StyledHeading data-scroll data-scroll-offset="30%">
        <span id="span-0">{sectionData.info_title?.text}</span>
      </StyledHeading>
      <InnerContainer>
        <div>
          <TextContainer>
            <div
              dangerouslySetInnerHTML={{
                __html: sectionData.info_description.html,
              }}
            />
          </TextContainer>
        </div>
        <OverviewImg
          src={sectionData.info_image?.url}
          alt="Interior of warehouse"
        />
      </InnerContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 155px 0;
  background: ${({ theme }) => theme.colors.cream};
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
`

const StyledHeading = styled.h3`
  font-size: 48px;
  padding-left: 60px;

  @media screen and (max-width: 768px) {
    text-align: left;
    padding-left: 25px;
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
  align-items: center;

  @media screen and (max-width: 1100px) {
    flex-direction: column-reverse;
    padding: 0 25px;
  }
`

const TextContainer = styled.div`
  margin: 20px 0;

  p {
    margin-top: 20px;
    max-width: 675px;
    font-size: 25px;
    line-height: 36px;
    color: ${({ theme }) => theme.colors.aluminum};
  }

  span,
  a {
    font-size: 25px;
    line-height: 36px;
    color: ${({ theme }) => theme.colors.aluminum};

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1100px) {
    padding-right: 100px;
  }
`

const OverviewImg = styled.img`
  max-width: 540px;

  @media screen and (max-width: 1100px) {
    max-width: 100%;
  }
`

export default ValueProp
