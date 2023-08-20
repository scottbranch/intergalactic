const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions

  // QUERY FOR ALL BLOG POSTS
  const result = await graphql(
    `
      {
        allPrismicBlogPost(
          sort: { order: DESC, fields: first_publication_date }
          limit: 1000
        ) {
          edges {
            node {
              uid
            }
          }
        }
      }
    `
  )

  // CREATE BLOG LIST PAGES
  const posts = result.data.allPrismicBlogPost.edges
  const postsPerPage = 40
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/commslink` : `/commslink/${i + 1}`,
      component: path.resolve("./src/templates/commsLink.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  createRedirect({
    fromPath: `/commslink/heres-your-ultimate-guide-to-the-joint-strike-fighter/`,
    toPath: `/commslink/heres-your-ultimate-guide-to-the-joint-strike-fighter-f35`,
    redirectInBrowser: true,
    isPermanent: true,
  })

  createRedirect({
    fromPath: `/commslink/heres-your-ultimate-guide-to-the-joint-strike-fighter`,
    toPath: `/commslink/heres-your-ultimate-guide-to-the-joint-strike-fighter-f35`,
    redirectInBrowser: true,
    isPermanent: true,
  })

  const pages = await graphql(`
    {
      allPrismicBlogPost {
        nodes {
          uid
        }
      }
      allPrismicTeamMember {
        nodes {
          uid
        }
      }
      allPrismicSubsystem {
        nodes {
          uid
        }
      }
      allPrismicSystem {
        nodes {
          uid
        }
      }
    }
  `)

  pages.data.allPrismicBlogPost.nodes.forEach(edge => {
    createPage({
      path: `/commslink/${edge.uid}`,
      component: path.resolve("src/templates/blogPost.js"),
      context: {
        uid: edge.uid,
      },
    })
  })

  pages.data.allPrismicTeamMember.nodes.forEach(edge => {
    createPage({
      path: `/team/${edge.uid}`,
      component: path.resolve("src/templates/teamMember.js"),
      context: {
        uid: edge.uid,
      },
    })
  })

  pages.data.allPrismicSubsystem.nodes.forEach(edge => {
    createPage({
      path: `/solutions/subsystems/${edge.uid}`,
      component: path.resolve("src/templates/subSystem.js"),
      context: {
        uid: edge.uid,
      },
    })
  })

  pages.data.allPrismicSystem.nodes.forEach(edge => {
    createPage({
      path: `/solutions/${edge.uid}`,
      component: path.resolve("src/templates/system.js"),
      context: {
        uid: edge.uid,
      },
    })
  })
}

// BLOG PAGINATION STUF
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `allPrismicBlogPost`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
