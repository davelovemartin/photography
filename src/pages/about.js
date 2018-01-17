import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'


const AboutPage = ({ data }) => (
  <div>
    <Header
      title={'About ' + data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      location={data.site.siteMetadata.location}
      name={data.site.siteMetadata.name}
      fb={data.site.siteMetadata.fb}
      instagram={data.site.siteMetadata.instagram}
    />
    <h1>About Chris</h1>
    <p>Colourful and vibrant, Chris Hill’s photos have been a recent highlight on Instagram. Specialising in photos of reflections, he is one of the few people in Bristol who looks forward to wet weather.</p>
    <p>Thirty-five-year-old Chris lives near the SS Great Britain with his partner and their eight-month-old son.</p>
    <p>Photography has long been a passion of mine. Over the past year I’ve been inspired to push myself and develop my skills by members of the talented Bristol Instagram community. Ours is a beautiful, inspiring city, full of great photographic opportunities. I’m particularly interested in capturing our landmarks in the transition from day to night, and many of my images include people.</p>
    <p>For me, people make places and one of my aims is to portray the special relationships between this vibrant city and its inhabitants.</p>
    <Link to="/">Go back to the homepage to view and order prints.</Link>
  </div>
)

export default AboutPage

export const query = graphql`
  query AboutQuery {
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