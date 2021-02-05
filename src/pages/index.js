import * as React from "react"
import { Header } from '../components/Header.js';
import { Main } from '../components/Main.js';
import { Footer } from '../components/Footer.js';

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Header />
      <Main />
      <Footer />
    </main>
  )
}

export default IndexPage;
