import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'

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
    <p>Click on an image to view full dimensions and order prints.</p>
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
  }
`
