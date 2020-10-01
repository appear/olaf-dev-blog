import React from "react"
import { graphql } from "gatsby"

import Layout from "../shared/layout"
import Body from "../components/post/body"

export default function blogTemplate({ data }) {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark

  const { title, banner, summary } = frontmatter

  const seo = {
    title,
    banner,
    summary,
  }

  return (
    <Layout seo={seo}>
      <div className="blog-post-container">
        <div className="blog-post">
          <Body>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Body>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
