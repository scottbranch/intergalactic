import React from "react"
import Line from "../Line"
import styled from "styled-components"

const OurSolutions = () => {
  return (
    <StyledSection data-scroll-section>
      <StyledInner>
        <div className="intro-container">
          <p
            className="eyebrow fadein welcome"
            data-scroll
            data-scroll-offset="20%"
          >
            <span>Our Solutions</span>
          </p>
          <p className="intro">
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3867 3.14062H16.4297L16.4531 14.6602L2.05078 0.246093L0.644531 1.64062L15.0586 16.0664h5.52734L3.55078 18H18.3867V3.14062Z" fill="#91897D"/>
            </svg>
            Say hello to the future of thermal management and a new standard for performance, reliability, and intelligence.
          </p>
        </div>
        <div className="overview">
          <div>
            <h5>Achieve apex performance</h5>
            <p>Confidently push the boundaries of what’s possible.</p>
          </div>
          <div>
            <h5>Control every aspect</h5>
            <p>Enjoy end-to-end intelligent controls and custom software.</p>
          </div>
          <div>
            <h5>Scale with ease</h5>
            <p>Meet every requirement with systems that are highly modular and scalable.</p>
          </div>
          <div>
            <h5>Enjoy unmatched efficiency</h5>
            <p>Get more output while consuming less power. </p>
          </div>
          <div>
            <h5>Upgrade your quality</h5>
            <p>Rest easy knowing your ECS uses top-shelf parts and equipment.</p>
          </div>
        </div>
      </StyledInner>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 160px 0 180px;
  background: ${({ theme }) => theme.colors.black};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gold}`};
`

const StyledInner = styled.div`
  display: flex;
  padding: 0 60px;
  justify-content: space-between;

  .intro-container, .overview {
    flex: 50%;
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
