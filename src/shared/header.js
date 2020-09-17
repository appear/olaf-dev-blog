import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderContainer = styled.div`
  position: relative;
  height: 52px;
  box-sizing: border-box;
  box-shadow: 0 3px 10px 0 rgba(114, 114, 114, 0.08);
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 50px;
`

const Logo = styled.h1`
  display: inline-block;
  line-height: 52px;
  padding-left: 20px;
  font-size: 25px;
  font-weight: bold;
`

const MenuListContainer = styled.ul`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
`
const MenuContainer = styled.li`
  float: left;

  &:not(:last-child) {
    margin-right: 10px;
  }
`
const Label = styled.span`
  font-size: 14px;
`

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">☂️ DEV.OLAF</Link>
      </Logo>
      <MenuListContainer>
        <MenuContainer>
          <Label to="/posts">POSTS</Label>
        </MenuContainer>
        <MenuContainer>
          <Label>
            <Link
              to="https://www.linkedin.com/in/%EC%84%9D%EC%A7%84-%EA%B3%A0-a0a5a5128/"
              target="_blank"
            >
              ABOUT
            </Link>
          </Label>
        </MenuContainer>
      </MenuListContainer>
    </HeaderContainer>
  )
}

export default Header
