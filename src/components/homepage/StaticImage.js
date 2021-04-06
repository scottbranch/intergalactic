import React from "react"
import Line from "../Line"
import airCraft from "../../images/homepage/air-craft.jpg"
import styled from "styled-components"

const StaticImage = () => {
  return (
    <StyledSection data-scroll-section>
      <img data-scroll data-scroll-offset="20%" src={airCraft} />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  background: ${({ theme }) => theme.colors.cream};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.black}`};
  width: 100%;
  height: 875px;

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
