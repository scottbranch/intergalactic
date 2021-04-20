import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import styled from "styled-components"
import Filter from "../components/commslink/Filter"
import FeaturedBlog from "../components/commslink/FeaturedBlog"
import BlogCard from "../components/commslink/BlogCard"
import { isBrowser } from "react-device-detect"

const Commslink = () => {
  useEffect(() => {
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 100)
  }, [])

  return (
    <Layout>
      <SEO title="Commslink" />
      <Helmet>
        <body class="Commslink" />
      </Helmet>
      <StyledSection data-scroll-section>
        <HeadingContainer>
          <h1>Commslink</h1>
        </HeadingContainer>
      </StyledSection>
      <Filter />
      <FeaturedBlog />
      <Grid data-scroll-section>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <button>Load More</button>
      </Grid>
    </Layout>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 500px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.cream};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
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
    font-size: 76px;
    line-height: 68px;
    padding-bottom: 60px;
  }
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 40px 200px;
  background-color: ${({ theme }) => theme.colors.cream};

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
