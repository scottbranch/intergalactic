import React from "react"
import Arrow from "./Arrow.js"
import Link from "gatsby-link"
import styled from "styled-components"

const CookieBar = () => {
  return (
    <Div id="cookie-bar">
      <p>
        <Link to="/commslink/heres-why-we-changed-our-name-to-intergalactic">
          Airborne ECS is now Intergalactic <Arrow />
        </Link>
      </p>
    </Div>
  )
}

const Div = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  z-index: 150;
  background: ${({ theme }) => theme.colors.black};
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  left: 0;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease;

  &.hide {
    opacity: 0;
    visibility: hidden;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    margin: 0 25px 0 0;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 0.05em;

    a {
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
      font-family: ${({ theme }) => theme.fonts.cartographMedium};
      font-size: 15px;
      letter-spacing: 1px;
    }
  }

  svg path {
    fill: ${({ theme }) => theme.colors.white};
  }
`

export default CookieBar
