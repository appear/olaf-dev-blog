import React from "react"
import styled from "styled-components"

import Post from "./post"

const Section = styled.section`
  padding: 0 20px;
`

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
`

const PostContainer = styled.ul`
  box-sizing: border-box;
`

function Posts({ edges }) {
  console.log(edges)
  return (
    <Section>
      <Title>최근 포스트.</Title>
      <PostContainer>
        {edges.map(({ node: { frontmatter } }) => (
          <Post post={frontmatter} />
        ))}
      </PostContainer>
    </Section>
  )
}

export default Posts
