import React from "react"
import Checkmark from "../../assets/svg/checkmark"
import styled from "styled-components"

const BoxesChecked = () => {
  const listItems = [
    "Sole-sourced on major platforms.",
    "AS9100 certified.",
    "100% american made.",
    "Field tested at mach 1 and 10 g’s of force.",
    "CMMC cybersecurity compliant.",
  ]

  return (
    <StyledSection data-scroll-section>
      <StyledHeading data-scroll data-scroll-offset="30%">
        <span id="span-0">Boxes Checked</span>
      </StyledHeading>
      <StyledUl>
        {listItems.map((item, index) => (
          <StyledLi data-scroll>
            <StyledCheck />
            {item}
          </StyledLi>
        ))}
      </StyledUl>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 100px 25px;
  background: ${({ theme }) => theme.colors.cream};
  border-top: 1px solid ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 768px) {
    padding: 180px 60px;
  }
`

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 200px;
  max-width: 1250px;
  margin: 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const StyledLi = styled.li`
  font-size: 25px;
  list-style: none;
  padding: 40px 0;
  margin: 0;
  display: flex;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.colors.aluminum};

  @media screen and (min-width: 768px) {
    color: ${({ theme }) => theme.colors.black};
  }

  svg path {
    fill: ${({ theme }) => theme.colors.aluminum};

    @media screen and (min-width: 768px) {
      fill: ${({ theme }) => theme.colors.black};
    }
  }

  &.is-inview {
    &:before,
    &:after {
      width: 100%;
    }
    &:nth-last-child(1),
    &:nth-last-child(2) {
      &:after {
        width: 0;

        @media screen and (min-width: 768px) {
          width: 100%;
          position: absolute;
        }
      }
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

  &:nth-last-child(1),
  &:nth-last-child(2) {
    &:after {
      content: "";
      width: 0;
      height: 1px;
      background: ${({ theme }) => theme.colors.aluminum}
      position: absolute;
      bottom: 0;
      transition: width 1s ease;

      @media screen and (min-width: 768px) {
        background: ${({ theme }) => theme.colors.black};
      }
    }
  }
`

const StyledCheck = styled(Checkmark)`
  margin: 0 20px 0 0;
  width: 38px;
`

const StyledHeading = styled.h3`
  margin-bottom: 90px;

  @media screen and (min-width: 768px) {
    margin-bottom: 150px;
  }

  @media screen and (max-width: 768px) {
    font-size: 39px;
    line-height: 100%;
  }
`

export default BoxesChecked
