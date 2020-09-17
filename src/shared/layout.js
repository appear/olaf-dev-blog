import React from "react"
import Helmet from "react-helmet"

import ResetStyles from "./reset-style"
import Header from "./header"

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
      {children}
    </>
  )
}
