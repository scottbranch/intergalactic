import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Line from "../Line"
import styled from "styled-components"
import fallbackImage from "../../images/commslink/blog-fallback.jpg"

const FeaturedBlog = props => {
  const { show, blogData } = props

  const data = useStaticQuery(graphql`
    {
      allPrismicBlogPost(sort: { order: DESC, fields: data___date_published }) {
        edges {
          node {
            data {
              blog_content {
                text
              }
              blog_title {
                text
              }
              date_published
              preview_image {
                url
              }
            }
            uid
            tags
          }
        }
      }
    }
  `)

  // const blogData = data.allPrismicBlogPost.edges[0].node.data

  const truncate = str => {
    return str.length > 200 ? str.substring(0, 197) + "..." : str
  }

  return (
    <StyledSection
      data-scroll-section
      style={{ display: `${show ? "block" : "none"}` }}
    >
      <StyledInner>
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${
              blogData.data.preview_image.url
                ? blogData.data.preview_image.url
                : fallbackImage
            })`,
          }}
        />
        <div className="description">
          <span>{blogData.data.date_published}</span>
          <StyledH2>{blogData.data.blog_title.text}</StyledH2>
          <p>{truncate(blogData.data.blog_content.text)}</p>
          <a href={`/commslink/${blogData.uid}`}>
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
          </a>
        </div>
      </StyledInner>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 40px 25px 100px;
  background: ${({ theme }) => theme.colors.cream};

  @media screen and (min-width: 768px) {
    padding: 40px 0 120px;
  }
`

const StyledH2 = styled.h2`
  font-size: 25px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.tacticRegular};
`

const StyledInner = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 0 60px;
    flex-direction: row;
  }

  .image-container,
  .description {
    flex: none;

    @media screen and (min-width: 768px) {
      flex: 50%;
    }
  }

  .image-container {
    height: 290px;
    width: 100%;
    background-size: cover;
    background-position: center center;

    @media screen and (min-width: 768px) {
      height: 440px;
      width: 780px;
    }
  }

  .description {
    margin-left: 0px;
    margin-top: 20px;

    @media screen and (min-width: 768px) {
      margin-left: 80px;
    }

    span {
      display: block;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.aluminum};
      margin-bottom: 20px;
      font-family: ${({ theme }) => theme.fonts.cartographMedium};
      font-size: 15px;
      letter-spacing: 1px;
    }

    a {
      color: ${({ theme }) => theme.colors.aluminum};
      font-family: ${({ theme }) => theme.fonts.tacticRegular};
      display: inline-block;
      margin-top: 10px;

      @media screen and (min-width: 768px) {
        margin-top: 60px;
      }

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
