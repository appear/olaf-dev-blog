import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import ResetStyles from "./reset-style"
import Header from "./header"

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
        />
      </Helmet>
      <Header />
      <ResetStyles />
      <Container>{children}</Container>
    </>
  )
}
