import React from "react"
import Line from "../Line"
import styled from "styled-components"
import SolutionImg from "../../images/solutions/solution.jpg";

const Solution = () => {
  return (
    <SolutionContainer>
      <div className="image-container">
        <img src={SolutionImg} />
      </div>
      <div className="solution-detail">
        <h4>GS1—SX STARSCREAM</h4>
        <p>Ideal for extreme vibration and temperature environments.</p>
        <span>5 kW below ambient (active)</span>
        <span>10” x 10” x 28”</span>
        <span>115 lbs</span>
        <a href="#">
          Learn More
          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.60227 11L11.6932 5.90909L6.60227 0.818182L5.72727 1.69318L9.32955 5.28409H0V6.53409H9.32955L5.72727 10.1364L6.60227 11Z" fill="#6B6358"/>
          </svg>
        </a>
      </div>
    </SolutionContainer>
  )
}

const SolutionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0;
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    background-color: ${({ theme }) => theme.colors.cream};
    height: 1px;
  }

  .image-container, .solution-detail {
    flex: 50%;
  }

  .image-container {
    img {
      max-height: 720px;
    }
  }

  .solution-detail {
    h4 {
      color: ${({ theme }) => theme.colors.cream};
      font-family: ${({ theme }) => theme.fonts.tacticRegular};
      font-size: 48px;
    }

    p, span, a {
      color: ${({ theme }) => theme.colors.rust};
      display: block;
    }

    a {
      margin-top: 20px;

      svg {
        margin-left: 5px;
      }
    }
  }
`

export default Solution
