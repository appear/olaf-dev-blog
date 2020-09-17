import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderContainer = styled.div`
  height: 52px;
  box-sizing: border-box;
  box-shadow: 0 3px 10px 0 rgba(114, 114, 114, 0.08);
`

const Logo = styled.h1`
  display: inline-block;
  line-height: 52px;
  padding-left: 20px;
  font-size: 25px;
  font-weight: bold;
`

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">☂️ Dev.Olaf</Link>
      </Logo>
    </HeaderContainer>
  )
}

export default Header
