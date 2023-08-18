import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import styled from "styled-components"
import FeaturedBlog from "../components/commslink/FeaturedBlog"
import BlogCard from "../components/commslink/BlogCard"
import { isBrowser } from "react-device-detect"
import fallbackImage from "../images/commslink/blog-fallback.jpg"

const Commslink = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [filterText, setFilterText] = useState('All')
  const [showFeaturedBlog, setShowFeaturedBlog] = useState(true)

  useEffect(() => {
    setIsLoaded(true)
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 300)
  }, [])

  const data = useStaticQuery(graphql`
    {
      allPrismicBlogPost(sort: { order: DESC, fields: data___date_published }) {
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
        distinct(field: tags)
      }
      blog1: prismicBlogPost(id: {eq: "b7bf70b1-ed29-5d59-9497-57353344a54a"}) {
        data {
          blog_content {
            html
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
      blog2: prismicBlogPost(id: {eq: "f225e72e-e4e4-5c5d-a06e-5213628c7a79"}) {
        data {
          blog_content {
            html
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
  `)

  const blogData = data.allPrismicBlogPost.edges
  const tagData = data.allPrismicBlogPost.distinct

  const {
    blog1,
    blog2
  } = data

  const filterItems = (item) => {
    const allItems = document.querySelectorAll('.blog-item')
    const className = item.toString().replace(/\s+/g, '-').toLowerCase()
    const currentItems = document.querySelectorAll(`.${className}`)

    allItems.forEach((item) => {
      item.classList.remove('show')
      item.classList.add('hide')
    })

    currentItems.forEach((item) => {
      item.classList.add('show')
    })

    if(item === 'blog-item') {
      setShowFeaturedBlog(true)
    } else {
      setShowFeaturedBlog(false)
    }

    const scrollEl = document.getElementById('posts')
    window.scroll.scrollTo(scrollEl)

    window.scroll.update()

  }

  return (
    <Layout className="dark">
      <SEO title="Commslink" />
      <Helmet>
        <body class="Commslink" />
        <link rel="canonical" href="http://ig.space/commslink" />
      </Helmet>
      <StyledSection data-scroll-section>
        <HeadingContainer>
          <h1 className={isLoaded && "active"}>
            <span id="span-0">Commslink</span>
          </h1>
        </HeadingContainer>
      </StyledSection>
      <ListSection data-scroll-section>
        <StyledInner className="filter-container">
          <div className="intro-container">
            <p>Filter by:</p>
           </div>
          <div className="overview">
           <ul>
             <li><a href="javascript:void(0)" onClick={() => filterItems('blog-item')}>All</a></li>
             {tagData.map(item => {
               return (
               <li><a href="javascript:void(0)" onClick={() => filterItems(item)}>{item}</a></li>
             )})}
           </ul>
          </div>
        </StyledInner>
      </ListSection>
      <FeaturedBlog blogData={blog1} show={showFeaturedBlog}/>
      <Grid data-scroll-section id="posts">

      {/* repeat this for every  new blog entry */}
      <BlogCard
              className={`blog-item ${blog2.tags.map(function(item) {
                return item.replace(/\s+/g, '-').toLowerCase()
              })}`}
              featuredImage={
                blog2.data.preview_image.url
                  ? blog2.data.preview_image.url
                  : fallbackImage
              }
              title={blog2.data.blog_title?.text}
              category={blog2.tags.map(item => `${item}. `)}
              date={blog2.data.date_published}
              link={blog2.uid}
            />

        {/* TODO: Revert this back to blogData.slice(1) after pagination is fixed */}
        {blogData.map((item, index) => {
          const tags = item.node.tags
          let tagsArray = []
          tags.forEach(function(item) {
            tagsArray.push(item.replace(/\s+/g, '-').toLowerCase())
          })
          tagsArray = tagsArray.join(' ')
          return (
            <BlogCard
              className={`blog-item ${tagsArray}`}
              featuredImage={
                item.node.data.preview_image.url
                  ? item.node.data.preview_image.url
                  : fallbackImage
              }
              title={item.node.data.blog_title?.text}
              category={item.node.tags.map(item => `${item}. `)}
              date={item.node.data.date_published}
              link={item.node.uid}
            />
          )}
        )}
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
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 60px;
  }

  h1 {
    text-transform: uppercase;
    font-size: 12vw;
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
    font-size: 15px;
    letter-spacing: 1px;
    padding: 20px 40px;
    display: inline-block;
    margin: 0 auto;
  }
`

const ListSection = styled.section`
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.cream};
  padding: 25px 0 0;
`

const StyledInner = styled.div`
  display: block;
  align-items: center;
  padding: 0 60px;
  justify-content: space-between;

  @media screen and (min-width: 980px) {
    justify-content: space-between;
    display: flex;
  }

  .intro-container, .overview {
    p {
      color: ${({ theme }) => theme.colors.black};
      font-size: 15px;
      text-transform: uppercase;
    }

    ul {
      margin: 0;
      @media screen and (min-width: 980px) {
        display: flex;
        justify-content: space-evenly;
        margin: 0 0 1.5rem 1.5rem;
      }
      li {
        padding: 0 0 10px 0;
        margin: 0;
        @media screen and (min-width: 980px) {
          margin: 0 10px;
        }
      }
    }

    li {
      text-transform: uppercase;
      list-style: none;
      margin: 0 10px;
      font-size: 15px;
    }
  }

  .overview a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }
`

export default Commslink
