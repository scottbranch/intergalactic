import React from "react"
import Line from "../Line"
import styled from "styled-components"

const Contact = () => {
  return (
    <StyledSection data-scroll-section>
      <StyledInner>
        <h3>On call, on site, <br/>and at the ready.</h3>
      </StyledInner>
      <StyledInner>
        <FlexArea>
          <p
            className="eyebrow fadein welcome"
            data-scroll
            data-scroll-offset="20%"
          >
            <span>Systems Engineering &amp; Design</span>
          </p>
          <p className="intro">
            Precision engineered and preconfigured, these systems can be modified to specific applications and assembled with the fastest lead times in the industry. 
          </p>
          <a href="#">Let's Connect</a>
        </FlexArea>
        <FlexArea>
          <p
            className="eyebrow fadein welcome"
            data-scroll
            data-scroll-offset="20%"
          >
            <span>Field Maintenance &amp; Service</span>
          </p>
          <p className="intro">
          Everything we make is built to outperform, outlast, and outpace anything else out there. We offer scheduled field maintenance and onsite repairs to keep things tight and running smooth.
          </p>
          <a href="#">Let's Connect</a>
        </FlexArea>
        <FlexArea>
          <p
            className="eyebrow fadein welcome"
            data-scroll
            data-scroll-offset="20%"
          >
            <span>Troubleshooting &amp; Technical Support</span>
          </p>
          <p className="intro">
          Be it a loose connection, software bug, or gremlins run amok, our team will find and fix whatever’s wrong and get you back up and running in no time.
          </p>
          <a href="#">Let's Connect</a>
        </FlexArea>
      </StyledInner>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 160px 0 180px;
  background: ${({ theme }) => theme.colors.cream};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.aluminum}`};

  h3 {
    font-size: 48px;
    font-weight: 400;
  }
`

const FlexArea = styled.div`
  flex: 50%;
  margin-top: 80px;
  flex-grow: initial;
  padding-right: 40px;

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
  }
`

const StyledInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 60px;
  justify-content: space-between;

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
