import { createGlobalStyle } from "styled-components"
import { css } from "styled-components"
import theme from "../theme/"
import "../fonts/fonts.css"

//text delay for the heading stagger
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

  //stuff to trigger the in-view animations
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
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

img.fadein {
  opacity: 0;
  transition: opacity 1s ease;
  &.is-inview {
    opacity: 1;
  }
}

  main {
    padding-left: 0;

    @media screen and (min-width: 768px) {
      padding-left: 73px; //to offset the sidenav
    }
  }

  h2 {
    font-size: 52px;
    text-transform: uppercase;
    line-height: 100%;
    font-weight: 500;

    @media screen and (min-width: 768px) {
      font-size: 6.7vw; //119px
    }
  }

  h3 {
    font-size: 31px;
    line-height: 100%;
    text-transform: uppercase;
    font-weight: 500;

    @media screen and (min-width: 768px) {
      font-size: 5.3vw; //95px
      line-height: 95%;
    }
  }

  h4 {
    font-size: 31px;
    line-height: 100%;
    text-transform: uppercase;
    font-weight: 500;

    @media screen and (min-width: 768px) {
      font-size: 4.2vw; //76px
      line-height: 105%;
    }
  }

  h5 {
    font-size: 20px;
    line-height: 100%;
    text-transform: uppercase;
    font-weight: 500;

    @media screen and (min-width: 768px) {
      font-size: 3.7vw; //48px
      line-height: 105%;
    }
  }

  h6 {
    text-transform: uppercase;
    font-size: 25px;
    line-height: 105%;
    font-weight: 500;
  }

  h2 span,
  h3 span,
  h4 span,
  h5 span,
  h6 span {
    display: block;
    position: relative;
  }

  .eyebrow {
    font-size: 17.2px;
    line-height: 21px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .cases-container .text-block {
    color: ${theme.colors.aluminum};
    font-size: 25px;
    line-height: 36px;
    opacity: 0;
    transition: opacity 500ms ease;
    position: absolute;
  }

  .cases-container.civil .civil {
    opacity: 1;
  }

  .cases-container.defense .defense {
    opacity: 1;
  }

  .cases-container.space .space {
    opacity: 1;
  }

  .cases-container.land-sea .land-sea {
    opacity: 1;
  }

  .cases-container.civil .civil-button {
    color: ${theme.colors.white};
    text-decoration: underline;
  }

  .cases-container.defense .defense-button {
    color: ${theme.colors.white};
    text-decoration: underline;
  }

  .cases-container.space .space-button {
    color: ${theme.colors.white};
    text-decoration: underline;
  }

  .cases-container.land-sea .land-sea-button {
    color: ${theme.colors.white};
    text-decoration: underline;
  }

  //light theme ish
  .cases-container.light.civil .civil-button {
    color: ${theme.colors.black};
    text-decoration: underline;
  }

  .cases-container.light.defense .defense-button {
    color: ${theme.colors.black};
    text-decoration: underline;
  }

  .cases-container.light.space .space-button {
    color: ${theme.colors.black};
    text-decoration: underline;
  }

  .cases-container.light.land-sea .land-sea-button {
    color: ${theme.colors.black};
    text-decoration: underline;
  }

  #cases-container {
  flex: 50%;
  position: relative;
  width: auto;

  @media screen and (min-width: 768px) {
    width: 670px;
  }
}
`
