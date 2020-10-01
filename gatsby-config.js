const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Olaf Dev Blog`,
    siteUrl: `https://olaf-dev-blog.vercel.app/`,
    description: "개발에 관한 이야기를 나누는 개인 공간입니다.",
    author: "Olaf",
    ogImage:
      "https://github.com/appear/olaf-dev-blog/blob/master/static/og-image.png",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/data/pages`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              colorTheme: "Dark+ (default dark)",
              injectStyles: true,
              extensions: [],
              extensionDataDirectory: path.resolve("extensions"),
              logLevel: "error",
            },
          },
        ],
      },
    },
  ],
}
