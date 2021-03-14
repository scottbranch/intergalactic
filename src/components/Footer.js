import React from "react"
import styled from "styled-components"

const Footer = () => {
  return <StyledFooter data-scroll-section></StyledFooter>
}

const StyledFooter = styled.footer`
  padding: 95px 65px 65px;
  background: ${({ theme }) => theme.colors.black};
`

export default Footer
