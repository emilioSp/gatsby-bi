import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  post: {
    textTransform: 'uppercase',
  },
});

export const Main = () => {
  const classes = useStyles();
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
  `);

  const frontMatter = data.allMarkdownRemark.edges.map((n) => n.node.frontmatter);
  return (
    <>
      <ul>Notizie scritte in markdown</ul>
      {frontMatter
        .filter((f) => f.show_in_home)
        .map((f) => (
          <ul key={f.title}>
            <Link to={f.path} className={classes.post}>
              {f.title}
            </Link>
          </ul>
        ))}
    </>
  );
};
