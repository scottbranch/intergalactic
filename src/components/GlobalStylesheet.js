import { createGlobalStyle } from "styled-components"
import '../fonts/fonts.css'

export default createGlobalStyle`
  html,
  body {
    background: ${({ theme }) => theme.colors.black};
  }
`
