module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/data/pages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
