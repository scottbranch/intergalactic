import React from "react"
import Line from "../Line"
import styled from "styled-components"
import FeaturedImage from "../../images/commslink/featuredBlog.jpg"

const BlogCard = () => {
  return (
    <StyledInner>
      <div className="image-container"/>
      <div className="description">
        <span>08.03.21</span>
        <h5>REIMAGINING THERMAL ENGINES</h5>
        <span>The Boom BoX</span>
        <a href="#">
          Go to article
          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.60227 11L11.6932 5.90909L6.60227 0.818182L5.72727 1.69318L9.32955 5.28409H0V6.53409H9.32955L5.72727 10.1364L6.60227 11Z" fill="#6B6358"/>
        </svg>
        </a>
      </div>
    </StyledInner>
  )
}

const StyledInner = styled.div`
  width: 33.333%;
  padding: 0 20px;
  margin-bottom: 100px;

  .image-container, .description {
    flex: 50%;
  }

  .image-container {
    height: 320px;
    width: 100%;
    background-image: url('${FeaturedImage}');
    background-size: cover;
    background-position: center center;
  }

  .description {
    span {
      display: block;
      font-size: 14px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.aluminum};

      &:first-of-type {
        float: right;
      }

    }

    h5 {
      font-size: 25px;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.black};
      font-family: ${({ theme }) => theme.fonts.tacticRegular};
      margin: 20px 0 10px;
    }
    
    a {
      color: ${({ theme }) => theme.colors.aluminum};
      font-family: ${({ theme }) => theme.fonts.tacticRegular};
      display: inline-block;
      font-size: 16px;
      margin-top: 20px;

      svg {
        margin-left: 5px;
      }
    }

    p {
      font-family: ${({ theme }) => theme.fonts.tacticRegular};
    }
  }
`

export default BlogCard
