import React from "react"

import ResetStyles from "./reset-style"

export default function Layout({ children }) {
  return (
    <>
      <ResetStyles />
      {children}
    </>
  )
}
