import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../shared/layout"
import Posts from "../components/posts"

const Conatiner = styled.div`
  max-width: 800px;
  margin: 0 auto;

  border: 1px solid;
`

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <Conatiner>
        <Posts edges={edges} />
      </Conatiner>
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
