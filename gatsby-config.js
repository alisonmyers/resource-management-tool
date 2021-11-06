module.exports = {
  siteMetadata: {
    siteUrl: "https://alisonmyers.gatsbyjs.io/",
    title: "Alison's Portfolio",
    description: "much more like an eportfolio than an eportfolio"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      }
    }
  ],
};
