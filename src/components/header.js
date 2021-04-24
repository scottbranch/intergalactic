import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SvgWordmark from "../assets/svg/wordmark"
import SvgWordmarkDark from "../assets/svg/wordmarkDark"
import styled from "styled-components"

const Header = ({ siteTitle, className }) => (
  <StyledHeader className={className}>
    <Link to="/">
      {className === "dark" ? <SvgWordmarkDark /> : <SvgWordmark />}
    </Link>
    <ContactLink to="/contact" className="contact">
      Contact us
    </ContactLink>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = styled.header`
  display: none;

  @media screen and (min-width: 768px) {
    position: fixed;
    top: 40px;
    left: 0;
    z-index: 200;
    justify-content: space-between;
    width: 100%;
    padding-left: 140px;
    padding-right: 75px;
    display: flex;
  }

  &.dark {
    .contact {
      color: black;
    }
  }
`

const ContactLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.cartographMedium};
  color: ${({ theme }) => theme.colors.gold};
  text-transform: uppercase;
  text-decoration: none;
`

export default Header
