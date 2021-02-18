import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
    <div className="container pt-5">
      {jsonData.map((data) => (
        <div key={data.id}>
          {data.id}, {data.name}, {data.type}
        </div>
      ))}
    </div>
  );
};

export default JsonData;
