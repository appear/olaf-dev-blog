import React from "react"
import styled from "styled-components"

import bodyStyle from "./body-style"

const BodyContainer = styled.div`
  ${bodyStyle}

  padding: 0 20px 100px 20px;
`

function Body({ children }) {
  return <BodyContainer>{children}</BodyContainer>
}

export default Body
