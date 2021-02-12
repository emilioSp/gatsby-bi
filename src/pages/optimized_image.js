import React from 'react';
import { Layout } from '../components/Layout.js';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const OptimizedImage = ({ data }) => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-6">
          <h3>Questa immagine è in 4k, pesa 2.6mb, ma è ottimizzata per il tuo device!</h3>
          <Img
            fluid={data.img_4k.childImageSharp.fluid}
            alt="Una immagine in 4k ottimizzata per il tuo device"
          />
        </div>
        <div className="col-md-6">
          <h3>Questa immagine è in 8k, pesa 5.16mb, ma è ottimizzata per il tuo device!</h3>
          <Img
            fluid={data.img_8k.childImageSharp.fluid}
            alt="Una immagine in 8k ottimizzata per il tuo device"
          />
        </div>
      </div>
    </Layout>
  )
}

export default OptimizedImage;

export const query = graphql`
  query {
    img_4k: file(relativePath: { eq: "4k_img.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img_8k: file(relativePath: { eq: "8k_img.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`