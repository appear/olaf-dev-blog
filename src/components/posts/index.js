import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const SectionTitle = styled.div``

const Container = styled.ul``

const CardContainer = styled.li`
  margin: 10px 20px;
  box-sizing: border-box;
  border-radius: 22px;
  padding: 20px;
  box-shadow: 0 1px 3px 0 rgba(151, 154, 157, 0.3),
    0 2px 15px 0 rgba(151, 154, 157, 0.2);
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

function Posts({ edges }) {
  console.log(edges)
  return (
    <Container>
      <SectionTitle>최근 포스트</SectionTitle>
      {edges.map(
        ({
          node: {
            frontmatter: { date, title, slug, tags },
          },
        }) => {
          if (!slug) {
            return null
          }

          const badges = tags ? tags.split(",") : []

          return (
            <CardContainer>
              <Link to={slug}>
                <CardTitle>{title}</CardTitle>
                <CardDate>{date}</CardDate>
                <CardBadgeConatiner>
                  {badges.map(label => (
                    <CardBadge>{label}</CardBadge>
                  ))}
                </CardBadgeConatiner>
              </Link>
            </CardContainer>
          )
        }
      )}
    </Container>
  )
}

export default Posts
