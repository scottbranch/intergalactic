import React from "react"
import Line from "../Line"
import styled from "styled-components"
import shortcutsImg from "../../images/solutions/shortcuts.jpg"

const Shortcuts = () => {
  return (
    <StyledSection data-scroll-section>
      <StyledInner>
        <FlexArea>
          <h3>No Scrimping. No shortcuts.</h3>
        </FlexArea>
        <FlexArea>
          <p>Next-level innovations are only achieved with an obsessive focus on quality, certification, and compliance.</p>
        </FlexArea>
      </StyledInner>
      <StyledInnerCentered>
        <FlexArea>
          <img src={shortcutsImg} />
        </FlexArea>
        <FlexArea>
          <p
            className="eyebrow fadein welcome"
            data-scroll
            data-scroll-offset="20%"
          >
            <span>Facilities</span>
          </p>
          <p className="intro">
            Intergalactic currently operates in a state-of-the-art facility in beautiful St. George, Utah, with 10,000 square feet of cleanroom space to support any aviation, defense, or space program. We’re building a 70,000-square-foot facility on Southern Utah’s “Tech Ridge” to accommodate our growth.
          </p>
          <p
            className="eyebrow fadein welcome m-top"
            data-scroll
            data-scroll-offset="20%"
          >
            <span>Certified</span>
          </p>
          <p className="intro">
            AS9100D/ISO9001:2015
          </p>
        </FlexArea>
      </StyledInnerCentered>
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

  p {
    color: ${({ theme }) => theme.colors.aluminum};
  }
`

const FlexArea = styled.div`
  flex: 50%;
  margin-top: 80px;
  flex-grow: initial;

  .intro {
    color: ${({ theme }) => theme.colors.aluminum};
    max-width: 675px;
  }

  img {
    padding-right: 40px;
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

const StyledInnerCentered = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 60px;
  justify-content: space-between;
  align-items: center;

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

    &.m-top {
      margin-top: 40px;
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

export default Shortcuts
