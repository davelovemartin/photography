import React from 'react'
import CustomHelmet from '../components/helmet'

class Product extends React.Component {
  render () {
    return (
      <div>
        <CustomHelmet
            title={this.props.data.site.siteMetadata.title}
            description={this.props.data.site.siteMetadata.description}
            location={this.props.data.site.siteMetadata.location}
            name={this.props.data.site.siteMetadata.name}
            fb={this.props.data.site.siteMetadata.fb}
            instagram={this.props.data.site.siteMetadata.instagram}
        />
        <header>
            <h1>{this.props.data.contentfulProduct.title}</h1>
        </header>
      </div>
    )
  }
}

export default Product

export const query = graphql`
  query ProductQuery($title: String!) {
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
    contentfulProduct(title: { eq: $title } ) {
      title
      description {
        internal {
          content
        }
      }
    }
  }
`