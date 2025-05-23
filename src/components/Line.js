import React from "react"
import styled from "styled-components"

const Line = props => {
  const { theme, color, className } = props

  return <StyledLine className={className}></StyledLine>
}

const StyledLine = styled.div`
  content: "";
  width: 100px;
  height: 1px;
  background: ${({ theme, color }) =>
    color === "light" ? theme.colors.cream : theme.colors.black};
  display: block;
  position: absolute;
`

export default Line
