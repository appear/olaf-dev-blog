const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/data/pages`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-vscode`,
          options: {
            colorTheme: 'Dark+ (default dark)',
            injectStyles: true,
            extensions: [],
            extensionDataDirectory:
              path.resolve('extensions'),
            logLevel: 'error'
          }
        }]
      }
    },
  ],
}
