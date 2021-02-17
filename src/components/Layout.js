import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Header } from './Header.js';
import { Footer } from './Footer.js';

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[{ name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]}
      >
        <html lang="it" />
        <noscript>This site runs best with JavaScript enabled.</noscript>
      </Helmet>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
