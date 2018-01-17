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
    <h1>Thankyou</h1>
    <p>Your order has been received - we'll email a confirmation.</p>
    <p>Share the love:</p>
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