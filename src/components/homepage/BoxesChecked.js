import React from "react"
import styled from "styled-components"

const BoxesChecked = () => {
  return <StyledSection data-scroll-section></StyledSection>
}

const StyledSection = styled.section`
  padding: 180px 60px;
  background: ${({ theme }) => theme.colors.cream};
`

export default BoxesChecked
