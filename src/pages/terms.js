import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import { Box } from 'grid-styled'


const TermsPage = ({ data }) => (
  <div>
    <Header
      title={'Terms ' + data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      location={data.site.siteMetadata.location}
      name={data.site.siteMetadata.name}
      fb={data.site.siteMetadata.fb}
      instagram={data.site.siteMetadata.instagram}
    />
    <Box p={2}>
      <h2>Terms and Conditions</h2>
    </Box>
  </div>
)

export default TermsPage

export const query = graphql`
  query TermsQuery {
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