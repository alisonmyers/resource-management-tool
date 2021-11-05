module.exports = {
  siteMetadata: {
    siteUrl: "https://alisonmyers.gatsbyjs.io/",
    title: "Alison's Portfolio",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
  resolve: "gatsby-plugin-manifest",
  options: {
    name: "gatsby-starter-default",
    short_name: "starter",
    icon: "src/images/icon.png"
  }
};
