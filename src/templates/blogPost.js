import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { RichText } from "prismic-reactjs"
import { Helmet } from "react-helmet"

const Post = ({ data: { prismicBlogPost, allPrismicBlogPost, uid } }) => {
  const { data, tags } = prismicBlogPost

  return (
    <Layout className="dark">
      <SEO title="Blog" />
      <Helmet>
        <body class="blog" />
      </Helmet>
      <StyledSection data-scroll-section>
        <ContentOuter>
          <HeadingContainer>
            <Date>{data.date_published}</Date>
            <h5>{data.title}</h5>
            <HeaderImg src={data.preview_image.url} />
          </HeadingContainer>
          <ContentContainer>
            <Category>
              <span>{tags[0]}</span>
            </Category>
            <TextContainer>
              <div
                dangerouslySetInnerHTML={{ __html: data.blog_content.html }}
              />
            </TextContainer>
          </ContentContainer>
        </ContentOuter>
      </StyledSection>
    </Layout>
  )
}

export default Post

const StyledSection = styled.section`
  background: ${({ theme }) => theme.colors.cream};
  padding-top: 300px;
`

const HeadingContainer = styled.div`
  max-width: 1200px;
`

const Category = styled.p`
  width: 500px;
  text-transform: uppercase;

  &:before {
    content: "";
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.black};
    display: block;
  }

  span {
    padding-top: 20px;
    display: block;
    font-family: ${({ theme }) => theme.fonts.cartographMedium};
    color: ${({ theme }) => theme.colors.aluminum};
  }
`

const ContentOuter = styled.div`
  padding: 0 62px;
`

const ContentContainer = styled.div`
  max-width: 1540px;
  display: flex;
  justify-content: space-between;
  padding: 120px 0 180px;
`

const TextContainer = styled.div`
  max-width: 850px;
  text-align: left;

  h6 {
    text-transform: none;
  }

  * {
    color: ${({ theme }) => theme.colors.aluminum};
  }
`

const Date = styled.p`
  font-family: ${({ theme }) => theme.fonts.cartographMedium};
  color: ${({ theme }) => theme.colors.aluminum};
  margin-bottom: 10px;
`

const HeaderImg = styled.img`
  max-width: 1200px;
  margin-top: 60px;
`

export const pageQuery = graphql`
  query BlogPost($uid: String!) {
    prismicBlogPost(uid: { eq: $uid }) {
      uid
      data {
        title
        date_published(formatString: "")
        preview_image {
          url
        }
        blog_content {
          html
        }
      }
      tags
    }
    allPrismicBlogPost(sort: { order: DESC, fields: id }) {
      nodes {
        uid
        data {
          title
          date_published(formatString: "")
          preview_image {
            url
          }
          blog_content {
            html
          }
        }
        tags
      }
    }
  }
`
