import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Footer from '../components/footer'
import Gallery from '../components/gallery'
import { Box } from 'grid-styled'

const IndexPage = ({ data }) => (
  <div>
    <Header
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      location={data.site.siteMetadata.location}
      name={data.site.siteMetadata.name}
      fb={data.site.siteMetadata.fb}
      instagram={data.site.siteMetadata.instagram}
    />
    <Gallery
      nodes={data.allContentfulProduct.edges}
    />
    <Footer />
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title,
        description,
        location,
        name,
        fb,
        instagram
      }
    }
    allContentfulProduct {
      edges {
        node {
          id
          title
          picture {
            id
            title
            description
            resolutions(width: 352, height: 352) {
              ...GatsbyContentfulResolutions
            }
          }
        } 
      }
    }
  }
`
