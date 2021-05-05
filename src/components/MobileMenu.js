import React, { useState } from "react"
import SvgLogomark from "../assets/svg/logomark"
import Close from "../assets/svg/close"
import Open from "../assets/svg/open"
import Link from "gatsby-link"
import styled, { withTheme } from "styled-components"

const MobileMenu = ({ theme }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <StyledHeader className={menuOpen ? "active" : ""}>
      <Container>
        <LogoLink to="/">
          <SvgLogomark
            fill={menuOpen ? theme.colors.aluminum : theme.colors.black}
          />
        </LogoLink>
        <MenuText className={menuOpen ? "active" : ""} onClick={toggleMenu}>
          <span>{menuOpen ? "Close" : "Menu"}</span>{" "}
          {menuOpen ? (
            <Close fill={theme.colors.aluminum} />
          ) : (
            <Open fill={theme.colors.black} />
          )}
        </MenuText>
      </Container>
      <Overlay className={menuOpen ? "active" : ""}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/industries">Industries</Link>
          </li>
          <li>
            <Link to="/solutions">Solutions</Link>
          </li>
          <li>
            <Link to="/suppliers">Suppliers</Link>
          </li>
          <li>
            <Link to="/commslink">Commslink</Link>
          </li>
        </ul>

        <Social>
          <a
            className="social"
            href="https://www.instagram.com/airborneecs/"
            target="_blank"
          >
            IG
          </a>
          <a
            className="social"
            href="https://www.linkedin.com/company/airborneecs/"
            target="_blank"
          >
            LI
          </a>
          <a href="https://twitter.com/airborneecs?s=21" target="_blank">
            TW
          </a>
          <br />
          <Link className="links" to="/company">
            Company
          </Link>
          <Link className="links" to="/contact">
            Contact
          </Link>
        </Social>
        <Legal>
          <a
            href="https://prismic-io.s3.amazonaws.com/igspace/86f1d824-779c-4e74-8857-b3565c5557cf_PUR-PO-001+Intergalactic+ECS+Terms+and+Conditions.pdf"
            target="_blank"
          >
            Terms & Conditions
          </a>
          <p>© {new Date().getFullYear()} Intergalactic</p>
        </Legal>
      </Overlay>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
  background: ${({ theme }) => theme.colors.cream};
  z-index: 520;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 768px) {
    display: none;
  }

  &.active {
    border-bottom: 1px solid ${({ theme }) => theme.colors.aluminum};
  }
`

const Container = styled.div`
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 480;
`

const MenuCircle = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.black};
  box-shadow: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  position: relative;

  &:before {
    content: "";
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.colors.black};
    border-radius: 50%;
    display: block;
    position: absolute;
  }
`

const MenuText = styled.div`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.cartographMedium};
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 1px;

  &.active {
    span {
      color: ${({ theme }) => theme.colors.aluminum};
    }

    .circle {
      border: 1px solid ${({ theme }) => theme.colors.aluminum};

      &:before {
        background: ${({ theme }) => theme.colors.aluminum};
      }
    }
  }

  &.active {
  }

  span {
    margin-right: 10px;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.black};
  z-index: 450;
  opacity: 0;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 400ms ease;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  ul {
    margin: 0 0 40px 16px;
  }

  ul li a {
    font-size: 39px;
    line-height: 100%;
    text-transform: uppercase;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`

const Social = styled.div`
  margin: 0px 0 50px 16px;
  .social {
    font-size: 16px;
    display: inline-block;
    margin-bottom: 20px;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    margin-right: 14px;
  }

  .links {
    font-size: 20px;
    line-height: 100%;
    text-transform: uppercase;
  }
`

const Legal = styled.div`
  margin: 0 0 38px 16px;
  a,
  p {
    color: ${({ theme }) => theme.colors.aluminum};
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    margin-bottom: 5px;
  }
`

const LogoLink = styled(Link)`
  top: 2px;
  position: relative;
`

export default withTheme(MobileMenu)
