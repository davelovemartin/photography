import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'

const ConfirmationPage = ({ data }) => (
  <div>
    <Header
      title={'Order Confirmation ' + data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      location={data.site.siteMetadata.location}
      name={data.site.siteMetadata.name}
      fb={data.site.siteMetadata.fb}
      instagram={data.site.siteMetadata.instagram}
    />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default ConfirmationPage

export const query = graphql`
  query ConfirmationQuery {
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