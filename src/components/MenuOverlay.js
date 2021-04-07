import React from "react"
import SvgLogomark from "../assets/svg/logomark"
import SvgAero from "../assets/svg/aerospace"
import Link from "gatsby-link"
import styled from "styled-components"

const MenuOverlay = props => {
  const { className } = props

  return (
    <MenuContainer className={className}>
      <ListContainer>
        <ul>
          <li>
            <Link to="/">
              <h3>Home</h3>
            </Link>
          </li>
          <li>
            <Link to="/industries">
              <h3>Industries</h3>
            </Link>
          </li>
          <li>
            <Link to="/solutions">
              <h3>Solutions</h3>
            </Link>
          </li>
          <li>
            <Link to="/suppliers">
              <h3>Suppliers</h3>
            </Link>
          </li>
          <li>
            <Link to="/commslink">
              <h3>Commslink</h3>
            </Link>
          </li>
        </ul>
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
  }
`

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export default MenuOverlay
