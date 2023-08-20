import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import styled from "styled-components"
import FeaturedBlog from "../components/commslink/FeaturedBlog"
import BlogCard from "../components/commslink/BlogCard"
import { isBrowser } from "react-device-detect"
import fallbackImage from "../images/commslink/blog-fallback.jpg"

const BlogList = props => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showFeaturedBlog, setShowFeaturedBlog] = useState(true)

  useEffect(() => {
    setIsLoaded(true)
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 300)
  }, [])

  const filterItems = item => {
    const allItems = document.querySelectorAll(".blog-item")
    const className = item.toString().replace(/\s+/g, "-").toLowerCase()
    const currentItems = document.querySelectorAll(`.${className}`)

    allItems.forEach(item => {
      item.classList.remove("show")
      item.classList.add("hide")
    })

    currentItems.forEach(item => {
      item.classList.add("show")
    })

    if (item === "blog-item") {
      setShowFeaturedBlog(true)
    } else {
      setShowFeaturedBlog(false)
    }

    const scrollEl = document.getElementById("posts")
    window.scroll.scrollTo(scrollEl)

    window.scroll.update()
  }

  const blogData = props.data.allPrismicBlogPost.edges
  const tagData = props.data.allPrismicBlogPost.distinct
  const pageInfo = props.data.allPrismicBlogPost.pageInfo
  const paginationNumbers = []

  for (let i = 0; i < pageInfo.pageCount; i++) {
    let currentPage = i + 1
    paginationNumbers.push(currentPage)
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
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={() => filterItems("blog-item")}
                >
                  All
                </a>
              </li>
              {tagData.map(item => {
                return (
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={() => filterItems(item)}
                    >
                      {item}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </StyledInner>
      </ListSection>
      {pageInfo.currentPage === 1 ? (
        <FeaturedBlog blogData={blogData[0].node} show={showFeaturedBlog} />
      ) : (
        ""
      )}
      <Grid data-scroll-section id="posts">
        {blogData.slice(1).map((item, index) => {
          const tags = item.node.tags
          let tagsArray = []
          tags.forEach(function (item) {
            tagsArray.push(item.replace(/\s+/g, "-").toLowerCase())
          })
          tagsArray = tagsArray.join(" ")
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
          )
        })}
        <PaginationUl>
          {pageInfo.hasPreviousPage ? (
            <PaginateTextLink
              to={`/commslink/${
                pageInfo.currentPage === 2 ? "" : pageInfo.currentPage - 1
              }`}
            >
              Prev
            </PaginateTextLink>
          ) : (
            ""
          )}
          {paginationNumbers.map(item => {
            return (
              <li className={item === pageInfo.currentPage ? "active" : ""}>
                <Link to={item === 1 ? "/commslink" : `/commslink/${item}`}>
                  {item}
                </Link>
              </li>
            )
          })}
          {pageInfo.hasNextPage ? (
            <PaginateTextLink to={`/commslink/${pageInfo.currentPage + 1}`}>
              Next
            </PaginateTextLink>
          ) : (
            ""
          )}
        </PaginationUl>
      </Grid>
    </Layout>
  )
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allPrismicBlogPost(
      sort: { order: DESC, fields: first_publication_date }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
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
      distinct(field: tags)
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        itemCount
        totalCount
        perPage
        pageCount
      }
    }
  }
`

const PaginationUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;

  li {
    list-style: none;
    margin: 0 10px;
    text-decoration: none;
    font-size: 17px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.aluminum};

      &:hover {
        color: ${({ theme }) => theme.colors.black};
      }
    }

    &.active a {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`

const PaginateTextLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 20px;

  &:hover {
    text-decoration: underline;
  }
`

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

  .intro-container,
  .overview {
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

export default BlogList
