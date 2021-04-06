import React from "react"
import Line from "../Line"
import styled from "styled-components"

const Welcome = () => {
  return (
    <StyledSection data-scroll-section>
      <StyledInner>
        <p
          className="eyebrow fadein welcome"
          data-scroll
          data-scroll-offset="20%"
        >
          <span>Welcome to Intergalactic</span>
        </p>
        <p className="fadein" data-scroll data-scroll-offset="20%">
          <span>
            For decades, innovation in aerospace has been limited by old methods
            of thermal management that just can’t keep up. Those days are over.
            This is the era of further, faster and cooler. Welcome to the new
            age of aerospace technology.{" "}
          </span>
        </p>
      </StyledInner>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 160px 0 180px;
  background: ${({ theme }) => theme.colors.cream};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.black}`};
`

const StyledInner = styled.div`
  display: flex;
  padding: 0 60px;
  justify-content: space-between;

  p {
    max-width: 850px;
  }

  .welcome {
    padding-top: 20px;
    &.is-inview {
      &:before {
        width: 150%;
      }
    }

    &:before {
      content: "";
      width: 0;
      transition: width 1s ease;
      height: 1px;
      background: ${({ theme }) => theme.colors.black};
      position: absolute;
      top: 0;
    }
  }
`

export default Welcome
