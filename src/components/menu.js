import React from "react"
import styled from "styled-components"

const Menu = () => {
  return <Nav></Nav>
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 73px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.cream};
  z-index: 500;
`

export default Menu
