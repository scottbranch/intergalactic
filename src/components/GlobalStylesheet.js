import { createGlobalStyle } from "styled-components"
import theme from "../theme/"
import "../fonts/fonts.css"

export default createGlobalStyle`
  html,
  body {
    color: ${theme.colors.black};
    font-family: ${theme.fonts.tacticRegular};
    font-size: 16px;
  }

  main {
    padding-left: 73px; //to offset the sidenav
  }

  h2 {
    font-family: ${theme.fonts.tacticRegular};
    text-transform: uppercase;
    font-size: 120px;
    line-height: 105px;
    font-weight: 500;
  }

  h2 span {
    display: block;
    position: relative;
  }

  .eyebrow {
    font-size: 17.2px;
    line-height: 21px;
    letter-spacing: 0.05em;
  }
`
