import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Line from "../Line"
import AnchorLink from "../AnchorLink"
import styled from "styled-components"

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      allPrismicSolutions {
        nodes {
          data {
            contact_heading {
              text
            }
            contact_blocks {
              title {
                text
              }
              description {
                text
              }
            }
          }
        }
      }
    }
  `)

  const sectionData = data.allPrismicSolutions.nodes[0].data

  return (
    <StyledSection data-scroll-section>
      <StyledInner>
        <h3 data-scroll data-scroll-offset="20%">
          <span>{sectionData.contact_heading?.text}</span>
        </h3>
      </StyledInner>
      <StyledInner>
        {sectionData.contact_blocks.map((item, index) => {
          return (
            <FlexArea data-scroll data-scroll-offset="20%">
              <p
                className="eyebrow fadein welcome"
                data-scroll
                data-scroll-offset="20%"
              >
                <span>{item.title?.text}</span>
              </p>
              <p className="intro">{item.description?.text}</p>
              <AnchorLink to="/contact">Let's Connect</AnchorLink>
            </FlexArea>
          )
        })}
      </StyledInner>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 160px 0 180px;
  background: ${({ theme }) => theme.colors.cream};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.aluminum}`};

  @media screen and (max-width: 768px) {
    padding: 80px 0 90px;
  }

  h3 {
    font-size: 48px;
    font-weight: 400;

    @media screen and (max-width: 768px) {
      font-size: 31px;
      line-height: 35px;
    }
  }
`

const FlexArea = styled.div`
  flex: 50%;
  margin-top: 80px;
  flex-grow: initial;
  padding-right: 40px;
  opacity: 0;
  transition: opacity 1s ease;

  &.is-inview {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 60px;
  }

  .intro {
    color: ${({ theme }) => theme.colors.aluminum};
    max-width: 675px;
  }

  a {
    font-family: ${({ theme }) => theme.fonts.cartographMedium};
    color: ${({ theme }) => theme.colors.aluminum};
    border: 1px solid ${({ theme }) => theme.colors.aluminum};
    background-color: transparent;
    text-transform: uppercase;
    font-size: 16px;
    padding: 20px 40px;
    text-decoration: none;
    display: inline-block;
    margin-top: 20px;
    font-size: 15px;
    letter-spacing: 1px;
  }
`

const StyledInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 60px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 25px;
  }

  .welcome {
    font-size: 25px;
    padding-top: 20px;
    display: inline-block;
    text-transform: none;
    color: ${({ theme }) => theme.colors.black};
    &.is-inview {
      &:before {
        width: 25%;
      }
    }

    &:before {
      content: "";
      width: 0;
      transition: width 1s ease;
      height: 1px;
      background: ${({ theme }) => theme.colors.aluminum};
      position: absolute;
      top: 0;
    }
  }
`

export default Contact
