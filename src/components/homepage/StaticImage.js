import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Line from "../Line"
import ship from "../../images/homepage/ship.jpg"
import styled from "styled-components"

const StaticImage = () => {
  const data = useStaticQuery(graphql`
    {
      allPrismicHomepageTemplate {
        nodes {
          data {
            divider_image {
              url
            }
          }
        }
      }
    }
  `)

  const imageData = data.allPrismicHomepageTemplate.nodes[0].data

  return (
    <StyledSection data-scroll-section>
      <img
        data-scroll
        data-scroll-offset="20%"
        src={imageData.divider_image.url}
      />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  background: ${({ theme }) => theme.colors.cream};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.black}`};
  width: 100%;
  height: 100vh;

  @media screen and (min-width: 768px) {
    height: 875px;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 500ms ease;

    &.is-inview {
      opacity: 1;
    }
  }
`

export default StaticImage
