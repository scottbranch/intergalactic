import React from "react"
import Line from "../Line"
import Link from "gatsby-link"
import styled from "styled-components"
import SolutionImg from "../../images/solutions/starscream.jpg"
import SolutionImg2 from "../../images/solutions/gozer.jpg"
import SolutionImg3 from "../../images/solutions/falkor.jpg"
import SolutionImg4 from "../../images/solutions/stardust.jpg"
import SolutionImg5 from "../../images/solutions/mcfly.jpg"

const Solution = () => {
  return (
    <>
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
          <Link to="/solutions/starscream">
            Learn More
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.60227 11L11.6932 5.90909L6.60227 0.818182L5.72727 1.69318L9.32955 5.28409H0V6.53409H9.32955L5.72727 10.1364L6.60227 11Z"
                fill="#6B6358"
              />
            </svg>
          </Link>
        </div>
      </SolutionContainer>
      <SolutionContainer>
        <div className="image-container">
          <img src={SolutionImg2} />
        </div>
        <div className="solution-detail">
          <h4>GS1—GZ Gozer</h4>
          <p>
            Ideal for high-energy laser systems, large aircraft systems cooling.
          </p>
          <span>10 kW cooling and heating, below ambient (active)</span>
          <span>25” x 25” x 40”</span>
          <span>130 lbs</span>
          <Link to="/solutions/gozer">
            Learn More
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.60227 11L11.6932 5.90909L6.60227 0.818182L5.72727 1.69318L9.32955 5.28409H0V6.53409H9.32955L5.72727 10.1364L6.60227 11Z"
                fill="#6B6358"
              />
            </svg>
          </Link>
        </div>
      </SolutionContainer>
      <SolutionContainer>
        <div className="image-container">
          <img src={SolutionImg3} />
        </div>
        <div className="solution-detail">
          <h4>GS1—FK Falkor</h4>
          <p>
            Ideal for high-energy laser systems, large aircraft systems cooling.
          </p>
          <span>10 kW cooling and heating, below ambient (active)</span>
          <span>25” x 25” x 40”</span>
          <span>130 lbs</span>
          <Link to="/solutions/falkor">
            Learn More
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.60227 11L11.6932 5.90909L6.60227 0.818182L5.72727 1.69318L9.32955 5.28409H0V6.53409H9.32955L5.72727 10.1364L6.60227 11Z"
                fill="#6B6358"
              />
            </svg>
          </Link>
        </div>
      </SolutionContainer>
      <SolutionContainer>
        <div className="image-container">
          <img src={SolutionImg4} />
        </div>
        <div className="solution-detail">
          <h4>GS1—SD Stardust</h4>
          <p>
            Ideal for extreme vibration and temperature environments. High loads
            where below-ambient temperature is not required.
          </p>
          <span>10 kW cooling and heating, below ambient (active)</span>
          <span>25” x 25” x 40”</span>
          <span>130 lbs</span>
          <Link to="/solutions/stardust">
            Learn More
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.60227 11L11.6932 5.90909L6.60227 0.818182L5.72727 1.69318L9.32955 5.28409H0V6.53409H9.32955L5.72727 10.1364L6.60227 11Z"
                fill="#6B6358"
              />
            </svg>
          </Link>
        </div>
      </SolutionContainer>
      <SolutionContainer>
        <div className="image-container">
          <img src={SolutionImg5} />
        </div>
        <div className="solution-detail">
          <h4>GS1—MC MCFly</h4>
          <p>
            Ideal for high-energy laser systems, large aircraft systems cooling.
          </p>
          <span>10 kW cooling and heating, below ambient (active)</span>
          <span>25” x 25” x 40”</span>
          <span>130 lbs</span>
          <Link to="/solutions/mcfly">
            Learn More
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.60227 11L11.6932 5.90909L6.60227 0.818182L5.72727 1.69318L9.32955 5.28409H0V6.53409H9.32955L5.72727 10.1364L6.60227 11Z"
                fill="#6B6358"
              />
            </svg>
          </Link>
        </div>
      </SolutionContainer>
    </>
  )
}

const SolutionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 40px 60px;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    background-color: ${({ theme }) => theme.colors.cream};
    height: 1px;
  }

  &:last-of-type:after {
    display: none;
  }

  .image-container,
  .solution-detail {
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

    p,
    span,
    a {
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
