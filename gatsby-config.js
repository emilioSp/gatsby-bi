module.exports = {
  pathPrefix: process.env.NODE_ENV === 'production' ? "/gatsby-bi" : '',
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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-jss`
  ],
};
