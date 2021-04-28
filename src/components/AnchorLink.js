import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const AnchorLink = props => {
  const { children, to, className, color } = props

  return (
    <StyledLink to={to} className={className} color={color}>
      {children}
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  text-transform: uppercase;
  border: 1px solid
    ${({ theme, color }) =>
      color === "light" ? theme.colors.gold : theme.colors.black};
  color: ${({ theme, color }) =>
    color === "light" ? theme.colors.gold : theme.colors.black};
  text-decoration: none;
  padding: 20px 42px;
  font-family: ${({ theme }) => theme.fonts.cartographMedium};
`

export default AnchorLink
