import React from "react"
import styled from "styled-components"

const Container = styled.ul``

const CardContainer = styled.li``

const CardTitle = styled.div``
const CardDate = styled.div``

function Posts({ edges }) {
  console.log(edges)
  return (
    <Container>
      {edges.map(({ node: { frontmatter: { date, title } } }) => (
        <CardContainer>
          <CardTitle>{title}</CardTitle>
          <CardDate>{date}</CardDate>
        </CardContainer>
      ))}
    </Container>
  )
}

export default Posts
