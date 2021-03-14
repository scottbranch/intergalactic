import React from "react"
import SvgLogomark from "../assets/svg/logomark"
import SvgAero from "../assets/svg/aerospace"
import styled from "styled-components"

const Menu = () => {
  return (
    <Nav>
      <CircleContainer>
        <MenuCircle />
        <span>Menu</span>
      </CircleContainer>
      <SvgAero />
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
  flex-direction: column;
  justify-content: space-between;
`

const CircleContainer = styled.div`
  span {
    transform: rotate(90deg);
    display: block;
    text-transform: uppercase;
    font-size: 14px;
    margin-top: 19px;
    margin-left: -7px;
  }
`

const MenuCircle = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.black};
  box-shadow: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.colors.black};
    border-radius: 50%;
    display: block;
  }
`

export default Menu
