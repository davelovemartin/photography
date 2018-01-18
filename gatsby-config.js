require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Chris Hill Photography | Bristol',
    description: 'Bristol Photographer Chris Hill, specialising in editorial and commercial photography for national publications and brands.',
    location: 'https://chrishill.gallery',
    name: 'Chris Hill',
    fb: 'https://www.facebook.com/chrishillphotographs',
    instagram: 'https://www.instagram.com/chill1983'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
};
