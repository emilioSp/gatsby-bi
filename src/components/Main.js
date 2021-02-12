import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

export const Main = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              path
              date
              show_in_home
            }
          }
        }
      }
    }
  `)

  const frontMatter = data.allMarkdownRemark.edges.map(n => n.node.frontmatter);
  return (
    <div className="container pt-5">
      {
        frontMatter.filter(f => f.show_in_home).map(f => (
          <ul key={f.title}>
            <Link to={f.path}>{f.title}</Link>
          </ul>
        ))
      }
    </div>
  )
}