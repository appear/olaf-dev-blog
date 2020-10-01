import React from "react"
import { graphql } from "gatsby"

import Layout from "../shared/layout"
import Posts from "../components/posts"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <Posts edges={edges} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY.MM.DD")
            title
            tags
            category
            slug
          }
          rawMarkdownBody
        }
      }
    }
  }
`
