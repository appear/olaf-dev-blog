import React from "react"

import ResetStyles from "./reset-style"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <ResetStyles />
      {children}
    </>
  )
}
