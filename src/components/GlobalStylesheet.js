import { createGlobalStyle } from "styled-components"
import { css } from "styled-components"
import theme from "../theme/"
import "../fonts/fonts.css"

function textDelay() {
  let styles = ""

  for (let i = 0; i < 10; i += 1) {
    styles += `
       #span-${i} {
         transition-delay: ${i * 50}ms;
       }
     `
  }

  return css`
    ${styles}
  `
}

export default createGlobalStyle`
  html,
  body {
    color: ${theme.colors.black};
    font-family: ${theme.fonts.tacticRegular};
    font-size: 16px;
  }

  h2,
  h3,
  h4,
  p.fadein {
    position: relative;
    perspective: 600px;
    ${textDelay()};

    &.active,
    &.is-inview {
      span {
        transform: none;
        opacity: 1;
      }
    }

    span {
      opacity: 0;
      display: block;
      transform-origin: center bottom;
      transform-style: preserve-3d;
      transform: translateY(50%) rotateX(-20deg);
      transition: opacity 1.4s cubic-bezier(0.215, 0.61, 0.355, 1),
        transform 1.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
}

  main {
    padding-left: 73px; //to offset the sidenav
  }

  h2 {
    text-transform: uppercase;
    font-size: 120px;
    line-height: 105px;
    font-weight: 500;
  }

  h3 {
    text-transform: uppercase;
    font-size: 95px;
    line-height: 90px;
    font-weight: 500;
  }

  h4 {
    text-transform: uppercase;
    font-size: 76px;
    line-height: 68px;
    font-weight: 500;
  }

  h2 span,
  h3 span,
  h4 span {
    display: block;
    position: relative;
  }

  .eyebrow {
    font-size: 17.2px;
    line-height: 21px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
`
