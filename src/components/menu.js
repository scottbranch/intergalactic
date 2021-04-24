import React, { useState } from "react"
import SvgLogomark from "../assets/svg/logomark"
import SvgAero from "../assets/svg/aerospace"
import Close from "../assets/svg/close"
import MenuOverlay from "../components/MenuOverlay"
import styled, { withTheme } from "styled-components"

const Menu = ({ theme }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <MenuOverlay className={menuOpen && "active"} />
      <StyledDiv className={menuOpen && "active"}>
        <CircleContainer>
          <StyledButton onClick={toggleMenu}>
            {menuOpen ? (
              <StyledClose fill={theme.colors.cream} />
            ) : (
              <MenuCircle />
            )}
            <span>{menuOpen ? "Close" : "Menu"}</span>
          </StyledButton>
        </CircleContainer>
        <SvgAero fill={menuOpen ? theme.colors.cream : theme.colors.black} />
        <SvgLogomark
          fill={menuOpen ? theme.colors.cream : theme.colors.black}
        />
      </StyledDiv>
    </>
  )
}

const StyledDiv = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
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
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &.active {
    background: ${({ theme }) => theme.colors.black};

    span {
      color: ${({ theme }) => theme.colors.cream};
    }
  }
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

const StyledButton = styled.button`
  border: none;
  background: transparent;
  padding-bottom: 14px;
  outline: none;

  &:hover {
    cursor: pointer;
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

const StyledClose = styled(Close)`
  right: 2px;
  position: relative;
`

export default withTheme(Menu)
