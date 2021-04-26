import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { RichText } from "prismic-reactjs"
import { Helmet } from "react-helmet"
import { isBrowser } from "react-device-detect"

const Post = ({ data: { prismicBlogPost, allPrismicBlogPost, uid } }) => {
  useEffect(() => {
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 200)
  })

  const { data, tags, dataRaw } = prismicBlogPost

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
            <h5 className="fadein" data-scroll>
              <span id="span-0">{data.title}</span>
            </h5>
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
              {dataRaw.video.url !== undefined && (
                <video controls src={`${dataRaw.video.url}#t=0.5`} />
              )}
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
  padding-top: 150px;
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-top: 300px;
    padding-bottom: 0;
  }
`

const HeadingContainer = styled.div`
  max-width: 1200px;

  h5 {
    padding: 0 25px;

    @media screen and (min-width: 768px) {
      padding: 0;
    }
  }
`

const Category = styled.p`
  width: 100%;
  text-transform: uppercase;
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    width: 500px;
  }

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
  padding: 0;

  @media screen and (min-width: 768px) {
    padding: 0 62px;
  }
`

const ContentContainer = styled.div`
  max-width: 1540px;
  display: flex;
  justify-content: space-between;
  padding: 50px ​0 180px;
  flex-direction: column;
  padding: 0 25px;

  @media screen and (min-width: 768px) {
    padding: 120px 0 180px;
    flex-direction: row;
    padding: 0;
  }

  iframe {
    width: 100%;
    height: 500px;
  }

  video {
    width: 100%;
  }
`

const TextContainer = styled.div`
  max-width: 850px;
  text-align: left;
  margin-top: 50px;
  padding: 100px 0;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }

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
  padding: 0 25px;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`

const HeaderImg = styled.img`
  max-width: 1200px;
  margin-top: 10px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
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
      dataRaw
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
        dataRaw
      }
    }
  }
`
