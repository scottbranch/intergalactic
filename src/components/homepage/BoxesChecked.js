import React from "react"
import styled from "styled-components"

const BoxesChecked = () => {
  return (
    <StyledSection data-scroll-section>
      <StyledHeading>Boxes Checked</StyledHeading>
      <StyledUl>
        <StyledLi>Sole-sourced on major platforms.</StyledLi>
        <StyledLi>Sole-sourced on major platforms.</StyledLi>
        <StyledLi>Sole-sourced on major platforms.</StyledLi>
        <StyledLi>Sole-sourced on major platforms.</StyledLi>
        <StyledLi>Sole-sourced on major platforms.</StyledLi>
      </StyledUl>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 180px 60px;
  background: ${({ theme }) => theme.colors.cream};
`

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 200px;
  max-width: 1250px;
`

const StyledLi = styled.li`
  font-size: 25px;
  list-style: none;
  padding: 40px 0 40px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`

const StyledHeading = styled.h3``

export default BoxesChecked
