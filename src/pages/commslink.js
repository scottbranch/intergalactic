import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import styled from "styled-components"
import Filter from "../components/commslink/Filter"
import FeaturedBlog from "../components/commslink/FeaturedBlog"
import BlogCard from "../components/commslink/BlogCard"
import { isBrowser } from "react-device-detect"

const Commslink = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 300)
  }, [])

  const data = useStaticQuery(graphql`
    {
      allPrismicBlogPost(sort: { order: DESC, fields: id }) {
        edges {
          node {
            data {
              blog_content {
                html
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

  const blogData = data.allPrismicBlogPost.edges

  return (
    <Layout className="dark">
      <SEO title="Commslink" />
      <Helmet>
        <body class="Commslink" />
      </Helmet>
      <StyledSection data-scroll-section>
        <HeadingContainer>
          <h1 className={isLoaded && "active"}>
            <span id="span-0">Commslink</span>
          </h1>
        </HeadingContainer>
      </StyledSection>
      {/*<Filter />*/}
      <FeaturedBlog />
      <Grid data-scroll-section>
        {blogData.map((item, index) => {
          return (
            <BlogCard
              featuredImage={item.node.data.preview_image.url}
              title={item.node.data.blog_title.text}
              category={item.node.tags[0]}
              date={item.node.data.date_published}
              link={item.node.uid}
            />
          )
        })}
        {/*<button>Load More</button>*/}
      </Grid>
    </Layout>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 200px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.cream};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 768px) {
    height: 500px;
  }
`

const BGSection = styled.div`
  background-color: ${({ theme }) => theme.colors.cream};
`

const HeadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 60px;

  h1 {
    text-transform: uppercase;
    font-size: 31px;
    line-height: 100%;
    padding-bottom: 25px;
    font-weight: 500;

    @media screen and (min-width: 768px) {
      font-size: 76px;
      line-height: 68px;
      padding-bottom: 60px;
    }
  }
`

const Grid = styled.div`
  display: block;
  flex-wrap: wrap;
  padding: 0 25px 100px;
  background-color: ${({ theme }) => theme.colors.cream};

  @media screen and (min-width: 768px) {
    display: flex;
    padding: 0 40px 200px;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.cartographMedium};
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.black};
    background-color: transparent;
    text-transform: uppercase;
    font-size: 16px;
    padding: 20px 40px;
    display: inline-block;
    margin: 0 auto;
  }
`

export default Commslink
