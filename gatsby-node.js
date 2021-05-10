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
}
