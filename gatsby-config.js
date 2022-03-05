module.exports = {
  siteMetadata: {
    siteUrl: "https://resourcemanagementtool.gatsbyjs.io/",
    title: "ETEC511 - Resource Management Tool",
    description: "Better Resource Management for Your Courses"
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    {

      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      }
    },
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
          spreadsheetId: '1_zu-FzBg8sFzhHELd7bABVjAFPstDNGEhYnfgYJZUGA',
          worksheetTitle: 'resources',
          credentials: require('./client_secret.json'),
          typePrefix: "GoogleSpreadsheet"
      }
  },
  ],
};
