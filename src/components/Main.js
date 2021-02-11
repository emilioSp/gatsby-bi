import React from 'react';
import { Link } from 'gatsby';

export const Main = () => {
  return (
    <div className="container pt-5">
      <ul>
        <Link to="/blog/hello-world/">Hello world</Link>
      </ul>
      <ul>
        <Link to="/blog/hello-universe/">Hello universe</Link>
      </ul>
    </div>
  )
}
