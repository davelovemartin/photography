import React from 'react'
import Header from '../components/header'
import Img from 'gatsby-image'
import {RadioGroup, Radio} from 'react-radio-group' 

class Product extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      selectedSize: false,
      selectedFrame: false
    }
    this.handleChangeFrame = this.handleChangeFrame.bind(this)
    this.handleChangeSize = this.handleChangeSize.bind(this)
  }
  handleChangeFrame () {

  }
  handleChangeSize () {

  }
  render () {
    return (
      <div>
        <Header
            title={this.props.data.contentfulProduct.title}
            description={this.props.data.contentfulProduct.description}
            location={this.props.data.site.siteMetadata.location}
            name={this.props.data.site.siteMetadata.name}
            fb={this.props.data.site.siteMetadata.fb}
            instagram={this.props.data.site.siteMetadata.instagram}
        />
        <div>
          <Img 
            sizes={this.props.data.contentfulProduct.picture.sizes}
            alt={this.props.data.contentfulProduct.picture.description}
          />
        </div>
        <div>
          <h1>Title</h1>
          <p>description</p>
          <RadioGroup
            name='sizes'
            selectedValue={this.state.selectedSize}
            onChange={this.handleChangeSize}
            role='radiogroup'
          >
            <Radio value='a3' aria-checked={'false'}/>
            <Radio value='a2' aria-checked={'false'}/>
            <Radio value='digitalDownload' aria-checked={'false'}/>
          </RadioGroup>
          <RadioGroup
            name='frames'
            selectedValue={this.state.selectedFrame}
            onChange={this.handleChangeFrame}
            role='radiogroup'
          >
            <Radio value='noframe' aria-checked={'false'}/>
            <Radio value='budget' aria-checked={'false'}/>
            <Radio value='premium' aria-checked={'false'}/>
          </RadioGroup>
          <p>Error Messages</p>
          <p>Description of items selected</p>
          <h2>Total: </h2>
          <button />
        </div>
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
      picture {
        sizes(maxWidth: 640) {
          ...GatsbyContentfulSizes
        }
      } 
    }
  }
`