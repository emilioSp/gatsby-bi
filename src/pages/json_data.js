import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Layout } from '../components/Layout.js';

const JsonData = () => {
  const data = useStaticQuery(graphql`
    query {
      allExampleJson {
        nodes {
          id
          name
          type
        }
      }
    }
  `);

  const jsonData = data.allExampleJson.nodes;
  return (
    <Layout>
      <div className="container pt-5">
        {
          jsonData.map(data => (
            <div>{data.id}, {data.name}, {data.type}</div>
          ))
        }
      </div>
    </Layout>
  )
}

export default JsonData;