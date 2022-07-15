import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { RichText } from "prismic-reactjs"
import { Helmet } from "react-helmet"
import { isBrowser } from "react-device-detect"

const Post = ({ data: { prismicBlogPost, allPrismicBlogPost } }) => {
  useEffect(() => {
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 200)
  })

  const { data, tags, dataRaw, uid } = prismicBlogPost

  return (
    <Layout className="dark">
      <SEO
        title={data.page_title.text}
        description={data.meta_description.text}
      />
      <Helmet>
        <body class="blog" />
        {data.canonical && (
          <link rel="canonical" href={`http://ig.space/${uid}`} />
        )}
      </Helmet>
      <StyledSection data-scroll-section>
        <ContentOuter>
          <HeadingContainer>
            <Date>{data.date_published}</Date>
            <h1 className="fadein" data-scroll>
              <span id="span-0">{data.title}</span>
            </h1>
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

  h1 {
    padding: 0 25px;
    font-size: 20px;
    line-height: 100%;
    text-transform: uppercase;
    font-weight: 500;

    @media screen and (min-width: 768px) {
      font-size: 3.7vw; //48px
      line-height: 105%;
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
    font-size: 15px;
    letter-spacing: 1px;
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
  margin-top: 20px;
  padding: 0px 0;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
    padding: 100px 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-transform: none;
    font-size: 25px;
    line-height: 105%;
    font-weight: 500;
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
  font-size: 15px;
  letter-spacing: 1px;

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
        canonical
        title
        date_published(formatString: "")
        preview_image {
          url
        }
        blog_content {
          html
        }
        page_title {
          text
        }
        meta_description {
          text
        }
      }
      tags
      dataRaw
    }
    allPrismicBlogPost(sort: { order: DESC, fields: id }) {
      nodes {
        uid
        data {
          canonical
          title
          date_published(formatString: "")
          preview_image {
            url
          }
          blog_content {
            html
          }
          page_title {
            text
          }
          meta_description {
            text
          }
        }
        tags
        dataRaw
      }
    }
  }
`
