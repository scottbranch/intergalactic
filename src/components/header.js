import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SvgWordmark from "../assets/svg/wordmark"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/">
      <SvgWordmark />
    </Link>
    <ContactLink to="/contact">Contact us</ContactLink>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = styled.header`
  position: fixed;
  top: 40px;
  left: 0;
  z-index: 200;
  justify-content: space-between;
  width: 100%;
  padding-left: 140px;
  padding-right: 75px;
  display: flex;
`

const ContactLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.cartographMedium};
  color: ${({ theme }) => theme.colors.gold};
  text-transform: uppercase;
  text-decoration: none;
`

export default Header
