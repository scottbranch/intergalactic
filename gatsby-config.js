module.exports = {
  siteMetadata: {
    title: `Environmental Control Systems for Civil, Defense & Military | Airborne`,
    description: `Environmental Control Systems for Civil, Defense & Military | Airborne`,
    author: `@beastmodebranch`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-196848983-2",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "igspace",
        accessToken:
          "MC5ZRS1tVUJBQUFDQUFfbU1u.77-977-9WkPvv71TRu-_ve-_ve-_ve-_vRfvv73vv71a77-977-977-9Je-_ve-_ve-_ve-_ve-_vXHvv70n77-977-9de-_ve-_vQ",
        schemas: {
          homepage_template: require("./src/schemas/homepage_template.json"),
          product_page: require("./src/schemas/product.json"),
          blog_post: require("./src/schemas/blogPost.json"),
          suppliers_page: require("./src/schemas/suppliers_page.json"),
          company_page: require("./src/schemas/company_page.json"),
          team_member: require("./src/schemas/team_member.json"),
          subsystem: require("./src/schemas/subsystem.json"),
          solutions: require("./src/schemas/solutions.json"),
          featured_blog: require("./src/schemas/featured_blog.json"),
          contact_page: require("./src/schemas/contact_page.json"),
          industries_page: require("./src/schemas/industries_page.json"),
          system: require("./src/schemas/system.json")
        },
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children
        ) => {
          // Your HTML serializer
        },
        linkResolver: ({ node, key, value }) => doc => {
          // Your link resolver
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
