import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  html,
  body {
    background: ${({ theme }) => theme.colors.black};
  }
`
