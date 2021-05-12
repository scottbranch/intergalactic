import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Line from "../Line"
import Link from "gatsby-link"
import styled from "styled-components"

const Solution = () => {
  const data = useStaticQuery(graphql`
    {
      allPrismicSolutions {
        nodes {
          data {
            systems_list {
              title {
                text
              }
              subtitle {
                text
              }
              link {
                text
              }
              description_3 {
                text
              }
              description_2 {
                text
              }
              description_1 {
                text
              }
              image {
                url
              }
            }
          }
        }
      }
    }
  `)

  const sectionData = data.allPrismicSolutions.nodes[0].data

  return (
    <>
      {sectionData.systems_list.map((item, index) => {
        return (
          <SolutionContainer>
            <div
              className="image-container"
              data-scroll
              data-scroll-offset="20%"
            >
              <img src={item.image?.url} />
            </div>
            <div
              className="solution-detail"
              data-scroll
              data-scroll-offset="20%"
            >
              <h4>{item.title?.text}</h4>
              <p>{item.subtitle?.text}</p>
              <span>{item.description_1?.text}</span>
              <span>{item.description_2?.text}</span>
              <span>{item.description_3?.text}</span>
              <Link to={item.link?.text}>
                Learn More
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.60227 11L11.6932 5.90909L6.60227 0.818182L5.72727 1.69318L9.32955 5.28409H0V6.53409H9.32955L5.72727 10.1364L6.60227 11Z"
                    fill="#6B6358"
                  />
                </svg>
              </Link>
            </div>
          </SolutionContainer>
        )
      })}
    </>
  )
}

const SolutionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 40px 25px;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    background-color: ${({ theme }) => theme.colors.aluminum};
    height: 1px;
  }

  &:last-of-type:after {
    display: none;
  }

  .image-container,
  .solution-detail {
    flex: 50%;
  }

  .image-container {
    opacity: 0;
    transition: opacity 1s ease;

    &.is-inview {
      opacity: 1;
    }

    img {
      max-height: 720px;
    }
  }

  .solution-detail {
    opacity: 0;
    transition: opacity 1s ease;

    &.is-inview {
      opacity: 1;
    }

    span {
      font-family: ${({ theme }) => theme.fonts.cartographMedium};
      font-size: 15px;
      letter-spacing: 1px;
    }
  }

  .solution-detail {
    h4 {
      color: ${({ theme }) => theme.colors.cream};
      font-family: ${({ theme }) => theme.fonts.tacticRegular};
      font-size: 25px;

      @media screen and (min-width: 768px) {
        font-size: 48px;
      }
    }

    p,
    span,
    a {
      color: ${({ theme }) => theme.colors.rust};
      display: block;
    }

    a {
      margin-top: 20px;

      svg {
        margin-left: 5px;
      }
    }
  }
`

export default Solution
