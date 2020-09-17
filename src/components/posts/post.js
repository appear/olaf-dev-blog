import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Conatiner = styled.li`
  margin: 10px 0;
  padding: 20px 0;
  box-sizing: border-box;

  &:not(:last-child) {
    border-bottom: 1px solid #f3f3f3;
  }
`

const CardTitle = styled.div`
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 20px;
`
const CardDate = styled.div`
  font-size: 14px;
  font-weight: 400px;
  margin-bottom: 10px;
  color: #999;
`

const CardBadgeConatiner = styled.div``

const CardBadge = styled.span`
  border: 1px solid;
  padding: 5px 10px;
  display: inline-block;
  margin-right: 5px;
  font-size: 14px;
  border-radius: 4px;
`

function Post({ post }) {
  const { date, title, slug, tags } = post

  if (!slug) {
    return null
  }

  const badges = tags ? tags.split(",") : []

  return (
    <Conatiner>
      <Link to={slug}>
        <CardTitle>{title}</CardTitle>
        <CardDate>{date}</CardDate>
        <CardBadgeConatiner>
          {badges.map(label => (
            <CardBadge>{label}</CardBadge>
          ))}
        </CardBadgeConatiner>
      </Link>
    </Conatiner>
  )
}

export default Post
