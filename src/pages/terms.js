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
    <Box 
      p={2}
      width={['100%', '100%', '62%']}
    >
      <h2>Terms and Conditions</h2>
      <ol>
        <li>By purchasing an image as a print, you hereby agree that the print may only be used for personal use and may not be used for any commercial purposes including public display, exploitation, reproduction or syndication to third parties.</li>
        <li>Orders for prints (including frames) are fulfilled by a third party company ‘Prodigi Ltd’</li>
        <li>You acknowledge that we are not responsible for verifying the authority of the signatory taking receipt of the goods.</li>
        <li>In the event of any damage to a product as a result of mishandling in transit, we will send you a replacement. If it is not possible to send you a replacement, we will issue you with a full refund.</li>
        <li>If the product has been damaged in transit or is faulty, please contact us by phone +44(0)7917400552 (or by email to chris@chrishillphotography.co.uk) within 24 hours of receipt.</li>
        <li>When you receive your order, as per the EU Distance Selling Directive, you have until the expiry of seven days of receipt to return the ordered products. The goods must be returned in the same condition as they were originally dispatched and received by you. All items must be returned with tracking details.</li>
        <li>Even after purchase any images bought as prints remain the sole copyright of the photographer.</li>
      </ol>
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