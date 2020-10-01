import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import ResetStyles from "./reset-style"
import Header from "./header"

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

export default function Layout({ children, seo = {} }) {
  const {
    site: {
      siteMetadata: { title, description, siteUrl, author, ogImage },
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author
          ogImage
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
        />
        <meta name="subject" content={seo.title || title} />
        <meta name="title" content={seo.title || title} />
        <meta name="description" content={seo.summary || description} />
        <meta name="author" content={author} />
        <meta name="keywords" content={seo.title || title} />
        <meta property="og:image" content={seo.banner || ogImage} />
        <meta property="og:description" content={seo.summary || description} />
        <meta property="og:title" content={seo.title || title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
      </Helmet>
      <Header />
      <ResetStyles />
      <Container>{children}</Container>
    </>
  )
}
