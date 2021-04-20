import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import styled from "styled-components"
import Filter from "../components/commslink/Filter"
import FeaturedBlog from "../components/commslink/FeaturedBlog"
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

export default Commslink
