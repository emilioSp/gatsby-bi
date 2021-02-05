import * as React from "react"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { graphql } from 'gatsby';

const Dipartimento = ({ data, location, pageContext }) => {
  const [json, setJson] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      setJson(response.data);
    }
    setTimeout(fetch, 3000);
  }, [])
  return (
    <div className="container">
      <h1>La pagina del dipartimento</h1>
      <h3>Esempio di accesso alla location</h3>
      <div>{location.href}</div>
      <h3>Esempio di accesso a contenuto a build time, usando GraphQL</h3>
      <div>{data.site.siteMetadata.title} - {data.site.siteMetadata.description}</div>
      <h3>Esempio di accesso a dati presi da una api rest a build time</h3>
      <pre>{JSON.stringify(pageContext.todos)}</pre>
      <h3>Esempio di accesso a dati caricati a run time</h3>
      <pre>{json ? JSON.stringify(json) : 'Loading...'}</pre>
    </div>
  )
};

export default Dipartimento;

export const query = graphql`
query {
  site {
    siteMetadata {
      title
      description
    }
  }
}
`