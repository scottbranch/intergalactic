import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Line from "../Line"
import styled from "styled-components"

const Welcome = () => {
  const data = useStaticQuery(graphql`
    {
      allPrismicHomepageTemplate {
        nodes {
          data {
            value_prop_title {
              text
            }
            value_prop_description {
              text
            }
          }
        }
      }
    }
  `)

  const welcomeData = data.allPrismicHomepageTemplate.nodes[0].data

  return (
    <StyledSection data-scroll-section>
      <StyledInner>
        <p
          className="eyebrow fadein welcome"
          data-scroll
          data-scroll-offset="20%"
        >
          <span>{welcomeData.value_prop_title?.text}</span>
        </p>
        <Paragraph className="fadein" data-scroll data-scroll-offset="20%">
          <span>{welcomeData.value_prop_description?.text}</span>
        </Paragraph>
      </StyledInner>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 100px 0;
  background: ${({ theme }) => theme.colors.cream};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.black}`};

  @media screen and (min-width: 768px) {
    padding: 160px 0 180px;
  }
`

const StyledInner = styled.div`
  display: flex;
  padding: 0 25px;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 0 60px;
    flex-direction: row;
  }

  p {
    max-width: 850px;
  }

  .welcome {
    font-size: 25px;
    line-height: 100%;
    padding-top: 20px;
    margin-right: 20px;
    &.is-inview {
      &:before {
        width: 150%;
      }
    }
  }
`

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.aluminum};

  @media screen and (min-width: 768px) {
    font-size: 25px;
    line-height: 37px;
  }
`

export default Welcome
