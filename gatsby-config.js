module.exports = {
  pathPrefix: "/gatsby-bi",
  siteMetadata: {
    title: "Gatsby + Bootstrap Italia",
    description: "A starter kit for Gatsby + Bootstrap Italia"
  },
  plugins: [
    {
    resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    options: {
      disable: true,
    },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/post`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
