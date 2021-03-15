import React from "react"
import Checkmark from "../../assets/svg/checkmark"
import styled from "styled-components"

const BoxesChecked = () => {
  const listItems = [
    "Sole-sourced on major platforms.",
    "Sole-sourced on major platforms.",
    "Sole-sourced on major platforms.",
    "Sole-sourced on major platforms.",
    "Sole-sourced on major platforms.",
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
  padding: 180px 60px;
  background: ${({ theme }) => theme.colors.cream};
  border-top: 1px solid ${({ theme }) => theme.colors.black};
`

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 200px;
  max-width: 1250px;
  margin: 0;
`

const StyledLi = styled.li`
  font-size: 25px;
  list-style: none;
  padding: 40px 0;
  margin: 0;
  display: flex;
  align-items: center;
  position: relative;

  &.is-inview {
    &:before,
    &:after {
      width: 100%;
    }
    &:nth-last-child(1),
    &:nth-last-child(2) {
      &:after {
        width: 100%;
      }
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

  &:nth-last-child(1),
  &:nth-last-child(2) {
    &:after {
      content: "";
      width: 0;
      height: 1px;
      background: ${({ theme }) => theme.colors.black};
      position: absolute;
      bottom: 0;
      transition: width 1s ease;
    }
  }
`

const StyledCheck = styled(Checkmark)`
  margin: 0 20px 0 0;
`

const StyledHeading = styled.h3`
  margin-bottom: 150px;
`

export default BoxesChecked
