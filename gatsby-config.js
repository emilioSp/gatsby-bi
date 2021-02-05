module.exports = {
  pathPrefix: "/gatsby-bi",
  siteMetadata: {
    title: "Gatsby + Bootstrap Italia",
    description: "A starter kit for Gatsby + Bootstrap Italia"
  },
  plugins: [{
    resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    options: {
      disable: true,
    },
  },],
};
