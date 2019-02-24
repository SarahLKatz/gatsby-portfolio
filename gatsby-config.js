module.exports = {
  siteMetadata: {
    title: 'Sarah Katz',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blogs`,
        name: 'blogs',
      },
    },
    `gatsby-transformer-remark`
  ],
}
