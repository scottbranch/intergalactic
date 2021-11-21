import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import incremental from "../../images/homepage/incremental.jpg"
import AnchorLink from "../AnchorLink"
import Line from "../Line"
import styled from "styled-components"

const ValueProp = props => {
  const data = useStaticQuery(graphql`
    {
      allPrismicHomepageTemplate {
        nodes {
          data {
            solutions_text_1 {
              text
            }
            solutions_text_2 {
              text
            }
          }
        }
      }
    }
  `)

  const valueData = data.allPrismicHomepageTemplate.nodes[0].data

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
              <span>{valueData.solutions_text_1?.text}</span>
            </p>
            <p className="fadein" data-scroll data-scroll-offset="20%">
              <span>{valueData.solutions_text_2?.text}</span>
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
  padding: 100px 0;
  background: ${({ theme }) => theme.colors.cream};
  overflow: hidden;
  min-height: 970px;

  @media screen and (min-width: 768px) {
    padding: 155px 0 85px;
  }
`

const StyledHeading = styled.h3`
  line-height: 85%;
  span:nth-of-type(2) {
    left: 55px;

    @media screen and (min-width: 768px) {
      left: 115px;
    }
  }
`

const InnerContainer = styled.div`
  display: flex;
  padding: 0 25px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0 60px;
  }

  div:first-child {
    margin-right: 20px;
  }

  div:last-child {
    margin: 0;

    @media screen and (min-width: 768px) {
      margin-right: 20px;
    }
  }
`

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px 0 80px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  p {
    margin-top: 40px;
    max-width: 400px;
    margin-bottom: 0;

    @media screen and (min-width: 768px) {
      margin-bottom: auto;
    }

    &:nth-of-type(1) {
      margin-right: 40px;
    }
  }
`

const ValueImg = styled.img`
  max-width: 675px;
  width: 100%;
`

export default ValueProp
