const path = require("path")

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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicBlogPost {
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
}
