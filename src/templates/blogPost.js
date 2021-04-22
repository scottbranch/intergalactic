import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Helmet } from "react-helmet"

const Post = ({ data }) => {
  //const { data } = prismicJournal

  return (
    <Layout>
      <SEO title="Blog" />
      <Helmet>
        <body class="blog" />
      </Helmet>
      <p>testing</p>
    </Layout>
  )
}

export default Post

// export const pageQuery = graphql`
//   query JournalPost($uid: String!) {
//     prismicJournal(uid: { eq: $uid }) {
//       uid
//       data {
//         title {
//           text
//         }
//         description {
//           text
//         }
//         post_id
//       }
//     }
//     allPrismicJournal(sort: {order: DESC, fields: id}) {
//       nodes {
//         uid
//         slugs
//         data {
//           post_id
//           title {
//             text
//           }
//         }
//       }
//     }
//   }
// `
