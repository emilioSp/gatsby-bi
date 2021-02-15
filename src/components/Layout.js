import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { createUseStyles } from 'react-jss';
import { Header } from "./Header.js";
import { Footer } from './Footer.js';

const useStyles = createUseStyles({
  container: {
    composes: 'container',
    marginTop: '40px',
    marginBottom: '40px',
  }
});

export const Layout = ({ children }) => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <main>
        <title>{data.site.siteMetadata.title}</title>
        <Header />
          <div className={classes.container}>
            {children}
          </div>
        <Footer />
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}