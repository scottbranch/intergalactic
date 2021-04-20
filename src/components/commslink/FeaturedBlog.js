import React from "react"
import Line from "../Line"
import styled from "styled-components"
import FeaturedImage from "../../images/commslink/featuredBlog.jpg"

const FeaturedBlog = () => {
  return (
    <StyledSection data-scroll-section>
      <StyledInner>
        <div className="image-container"/>
        <div className="description">
         <span>08.03.21</span>
         <h3>REIMAGINING THERMAL ENGINES</h3>
         <span>The Boom BoX</span>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         <a href="#">
           Go to article
           <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.60227 11L11.6932 5.90909L6.60227 0.818182L5.72727 1.69318L9.32955 5.28409H0V6.53409H9.32955L5.72727 10.1364L6.60227 11Z" fill="#6B6358"/>
          </svg>
          </a>
        </div>
      </StyledInner>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 40px 0 120px;
  background: ${({ theme }) => theme.colors.cream};
`

const StyledInner = styled.div`
  display: flex;
  align-items: center;
  padding: 0 60px;
  justify-content: space-between;

  .image-container, .description {
    flex: 50%;
  }

  .image-container {
    height: 440px;
    width: 780px;
    background-image: url('${FeaturedImage}');
    background-size: cover;
    background-position: center center;
  }

  .description {
    margin-left: 80px;
    span {
      display: block;
      font-size: 16px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.aluminum};
      margin-bottom: 20px;

    }

    h3 {
      font-size: 25px;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.black};
      font-family: ${({ theme }) => theme.fonts.tacticRegular};
    }
    
    a {
      color: ${({ theme }) => theme.colors.aluminum};
      font-family: ${({ theme }) => theme.fonts.tacticRegular};

      svg {
        margin-left: 5px;
      }
    }

    p {
      font-family: ${({ theme }) => theme.fonts.tacticRegular};
      max-width: 420px;
    }
  }
`

export default FeaturedBlog
