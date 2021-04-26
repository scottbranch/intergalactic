import React from "react"
import Arrow from "./Arrow.js"
import styled from "styled-components"

const CookieBar = () => {
  return (
    <Div>
      <p>
        Airbone ECS is now Intergalactic <Arrow />
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

  p {
    color: ${({ theme }) => theme.colors.white};
    margin: 0 25px 0 0;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  svg path {
    fill: ${({ theme }) => theme.colors.white};
  }
`

export default CookieBar
