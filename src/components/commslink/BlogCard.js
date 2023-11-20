import React from "react"
import Line from "../Line"
import Link from "gatsby-link"
import styled from "styled-components"

const BlogCard = props => {
  const { featuredImage, title, category, date, link, className } = props

  return (
    <StyledInner
      data-scroll
      data-scroll-offset="20%"
      className={`blog-outer ${className}`}
    >
      <div
        className={`image-container`}
        style={{ backgroundImage: `url(${featuredImage})` }}
      />
      <div className="description">
        <span>{date}</span>
        <h2>{title}</h2>
        <span>{category}</span>
        <Link to={`/commslink/${link}`}>
          Go to article
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
    </StyledInner>
  )
}

const StyledInner = styled.div`
  width: 100%;
  padding: 0;
  margin-bottom: 100px;
  opacity: 0;
  transition: opacity 1s ease;

  &.is-inview {
    opacity: 1;
  }

  &.show {
    display: block !important;
  }

  &.hide {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 33.333%;
    padding: 0 20px;
  }

  .image-container,
  .description {
    flex: 50%;
  }

  .image-container {
    height: 320px;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

  .description {
    span {
      display: block;
      font-size: 14px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.aluminum};
      font-family: ${({ theme }) => theme.fonts.cartographMedium};
      font-size: 15px;
      letter-spacing: 1px;

      &:first-of-type {
        float: none;
        margin-top: 20px;

        @media screen and (min-width: 768px) {
          float: right;
          margin-top: 0;
        }
      }
    }

    h2 {
      font-size: 25px;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.black};
      font-family: ${({ theme }) => theme.fonts.tacticRegular};
      margin: 5px 0 10px;

      @media screen and (min-width: 768px) {
        margin: 20px 0 10px;
        max-width: 380px;
      }
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
