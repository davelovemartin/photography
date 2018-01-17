import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'

const NotFoundPage = ({ data }) => (
  <div>
    <Header
      title={'Oops ' + data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      location={data.site.siteMetadata.location}
      name={data.site.siteMetadata.name}
      fb={data.site.siteMetadata.fb}
      instagram={data.site.siteMetadata.instagram}
    />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Go back to the homepage to view and order prints.</Link>
  </div>
)

export default NotFoundPage

export const query = graphql`
  query FourOhFourQuery {
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