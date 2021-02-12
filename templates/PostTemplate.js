import React from "react"
import { graphql } from "gatsby"
import { Layout } from '../src/components/Layout.js';

export const PostTemplate = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const date = new Date(frontmatter.date);
  return (
    <Layout>
        <h1>{frontmatter.title}</h1>
        <hr />
        <h2>{date.toLocaleDateString()}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`

export default PostTemplate;
