import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.ul`
  padding: 10px;
`

const CardContainer = styled.li`
  border: 1px solid;
  margin-bottom: 10px;
  border-radius: 4px;
  padding: 20px;
`

const CardTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`
const CardDate = styled.div`
  font-size: 16px;
  font-weight: 400px;
  margin-bottom: 10px;
`

const CardBadgeConatiner = styled.div``

const CardBadge = styled.span`
  border: 1px solid;
  padding: 5px 10px;
  display: inline-block;
  margin-right: 5px;
`

function Posts({ edges }) {
  console.log(edges)
  return (
    <Container>
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
