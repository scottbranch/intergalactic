import React, { useState } from "react"
import SvgLogomark from "../assets/svg/logomark"
import SvgAero from "../assets/svg/aerospace"
import Link from "gatsby-link"
import styled from "styled-components"

const MenuOverlay = props => {
  const { className } = props

  const [navActive, setNavActive] = useState(false)
  const [activeItem, setActiveItem] = useState("")

  const handleHover = navItem => {
    setNavActive(true)
    setActiveItem(navItem)
  }

  const handleHoverOut = () => {
    setNavActive(false)
  }

  return (
    <MenuContainer className={className}>
      <ListContainer className={`${activeItem} ${navActive && "active"}`}>
        <ul>
          <li>
            <Link
              to="/"
              onMouseOver={navItem => handleHover("home")}
              onMouseOut={() => handleHoverOut()}
              className="home"
            >
              <h3>Home</h3>
            </Link>
          </li>
          <li>
            <Link
              to="/industries"
              onMouseOver={navItem => handleHover("industries")}
              onMouseOut={() => handleHoverOut()}
              className="industries"
            >
              <h3>Industries</h3>
            </Link>
          </li>
          <li>
            <Link
              to="/solutions"
              onMouseOver={navItem => handleHover("solutions")}
              onMouseOut={() => handleHoverOut()}
              className="solutions"
            >
              <h3>Solutions</h3>
            </Link>
          </li>
          <li>
            <Link
              to="/suppliers"
              onMouseOver={navItem => handleHover("suppliers")}
              onMouseOut={() => handleHoverOut()}
              className="suppliers"
            >
              <h3>Suppliers</h3>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onMouseOver={navItem => handleHover("commslink")}
              onMouseOut={() => handleHoverOut()}
              className="commslink"
            >
              <h3>Commslink</h3>
            </Link>
          </li>
        </ul>
        <BottomText>
          <div>
            <Social>
              <a href="https://www.instagram.com/airborneecs/" target="_blank">
                IG
              </a>
              <a
                href="https://www.linkedin.com/company/airborneecs/"
                target="_blank"
              >
                LI
              </a>
            </Social>
            <Legal>
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/privacy">Privacy</Link>
            </Legal>
          </div>
          <div>
            <Social>
              <Link to="/company">COMPANY</Link>
              <Link to="/contact">CONTACT</Link>
            </Social>
            <Legal>
              <p>© 2021 Intergalactic</p>
            </Legal>
          </div>
        </BottomText>
      </ListContainer>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.black};
  transform: translate3d(-100%, 0, 0);
  opacity: 0;
  transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  z-index: 200;

  &.active {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  ul {
    margin-left: 235px;
  }

  li {
    margin: 25px 0;
  }

  li a {
    color: ${({ theme }) => theme.colors.cream};
    text-decoration: none;
    transition: all 500ms ease;
    position: relative;
    display: inline-block;
  }
`

const ListContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;

  &.active {
    &.home .home {
      color: rgba(230, 225, 218, 1);
      padding-left: 3rem;
    }
    &.industries .industries {
      color: rgba(230, 225, 218, 1);
      padding-left: 3rem;
    }
    &.solutions .solutions {
      color: rgba(230, 225, 218, 1);
      padding-left: 3rem;
    }
    &.suppliers .suppliers {
      color: rgba(230, 225, 218, 1);
      padding-left: 3rem;
    }
    &.commslink .commslink {
      color: rgba(230, 225, 218, 1);
      padding-left: 3rem;
    }
    li a {
      color: rgba(230, 225, 218, 0.4);
    }
  }
`

const BottomText = styled.div`
  position: fixed;
  bottom: 45px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 60px 0 130px;

  > div {
    display: flex;
    flex-direction: column;
  }
`

const Social = styled.div`
  color: ${({ theme }) => theme.colors.cream};
  margin-bottom: 15px;

  a {
    margin-right: 30px;
    font-size: 25px;
    color: ${({ theme }) => theme.colors.cream};
    text-decoration: none;
  }
`

const Legal = styled.div`
  a {
    margin-right: 150px;
    font-family: ${({ theme }) => theme.fonts.cartographMedium};
    color: ${({ theme }) => theme.colors.rust};
    text-decoration: none;
    font-size: 16px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.cartographMedium};
    color: ${({ theme }) => theme.colors.rust};
    text-decoration: none;
    font-size: 16px;
  }
`

export default MenuOverlay
