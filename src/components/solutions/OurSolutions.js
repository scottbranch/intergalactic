import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Line from "../Line"
import styled from "styled-components"

const OurSolutions = () => {
  const data = useStaticQuery(graphql`
    {
      allPrismicSolutions {
        nodes {
          data {
            solutions_section_title {
              text
            }
            solutions_section_subtitle {
              text
            }
            solutions_list {
              item_description {
                text
              }
              item_title {
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
        <div className="intro-container">
          <p
            className="eyebrow fadein welcome"
            data-scroll
            data-scroll-offset="20%"
          >
            <span>{sectionData.solutions_section_title?.text}</span>
          </p>
          <p className="intro fadein" data-scroll data-scroll-offset="20%">
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3867 3.14062H16.4297L16.4531 14.6602L2.05078 0.246093L0.644531 1.64062L15.0586 16.0664h5.52734L3.55078 18H18.3867V3.14062Z"
                fill="#91897D"
              />
            </svg>
            {sectionData.solutions_section_subtitle?.text}
          </p>
        </div>
        <div className="overview">
          {sectionData.solutions_list?.map((item, index) => {
            return (
              <div data-scroll data-scroll-offset="20%">
                <h5>{item.item_title?.text}</h5>
                <p>{item.item_description?.text}</p>
              </div>
            )
          })}
        </div>
      </StyledInner>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 160px 0 180px;
  background: ${({ theme }) => theme.colors.black};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gold}`};

  @media screen and (max-width: 768px) {
    padding: 80px 0 90px;
  }
`

const StyledInner = styled.div`
  display: flex;
  padding: 0 60px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 25px;
  }

  .intro-container,
  .overview {
    flex: 50%;
  }

  .intro-container p {
    opacity: 0;
    transition: opacity 1s ease;

    &.is-inview {
      opacity: 1;
    }
  }

  .overview > div {
    opacity: 0;
    transition: opacity 1s ease;
  }

  .overview > div.is-inview {
    opacity: 1;
  }

  p {
    max-width: 620px;
    color: ${({ theme }) => theme.colors.rust};
  }

  .welcome {
    font-size: 25px;
    padding-top: 20px;
    display: inline-block;
    color: ${({ theme }) => theme.colors.gold};
    &.is-inview {
      &:before {
        width: 80%;
      }
    }

    &:before {
      content: "";
      width: 0;
      transition: width 1s ease;
      height: 1px;
      background: ${({ theme }) => theme.colors.gold};
      position: absolute;
      top: 0;
    }
  }

  .intro {
    svg {
      height: 11px;
      margin-right: 5px;
    }
  }

  .overview {
    margin-top: 70px;

    div {
      margin-bottom: 70px;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
    h5 {
      font-size: 20px;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.cream};
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.fonts.tacticRegular};
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
      max-width: 380px;
    }
  }
`

export default OurSolutions
