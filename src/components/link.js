import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const AnchorLink = props => {
  const { children, to } = props

  return <StyledLink to={to}>{children}</StyledLink>
}

const StyledLink = styled(Link)`
  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  padding: 20px 42px;
`

export default AnchorLink
