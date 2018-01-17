import React from 'react'
import Helmet from 'react-helmet'

const CustomHelmet = props => (
  <Helmet
    title={props.title}
    htmlAttributes={{ lang: 'en' }}
    meta={[
      { charset: 'utf-8' },
      { name: 'description', content: props.description },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'theme-color', content: '#ffcc00' }
    ]}
    link={[
      { rel: 'alternate', href: props.location, hreflang: 'en-uk' },
      { rel: 'canonical', href: props.location },
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ffcc00' }
    ]}
  >
    <script type='application/ld+json'>{`
      '@context': 'http://schema.org',
      '@type': 'Person',
      'name' : '${props.name}',
      'url': '${props.location}',
      'sameAs' : [
        '${props.fb}',
        '${props.instagram}'
      ]
    `}</script>
  </Helmet>
)

export default CustomHelmet