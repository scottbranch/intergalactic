import React from "react"
import SvgLogomark from "../assets/svg/logomark"
import styled from "styled-components"

const Menu = () => {
  return (
    <Nav>
      <SvgLogomark />
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 73px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.cream};
  z-index: 500;
  border-right: 1px solid ${({ theme }) => theme.colors.black};
  padding: 45px 0;
  display: flex;
  align-items: center;
`

export default Menu
