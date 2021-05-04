/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./GlobalStylesheet"

import Scroll from "./locomotiveScroll"
import Header from "./header"
import Footer from "./Footer"
import "./layout.css"
import "./locomotive-scroll.css"
import theme from "../theme/"
import Menu from "./menu"
import MobileMenu from "./MobileMenu"

const Layout = ({ children, location, props, className }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        className={className}
      />

      {/* Here we pass the callbacks to the component. Anything that impacts the innerHeight, for example: Font Loaded */}
      <Scroll callbacks={location} />
      <main>
        <Menu />
        <MobileMenu />
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
