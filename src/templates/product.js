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
            <Radio value='a3' aria-checked={'false'} />a3
            <Radio value='a2' aria-checked={'false'} />a2
            <Radio value='digitalDownload' aria-checked={'false'} />digitalDownload
          </RadioGroup>
          <RadioGroup
            name='frames'
            selectedValue={this.state.selectedFrame}
            onChange={this.handleChangeFrame}
            role='radiogroup'
          >
            <Radio value='noframe' aria-checked={'false'} />noframe
            <Radio value='budget' aria-checked={'false'} />budget
            <Radio value='premium' aria-checked={'false'} />premium
          </RadioGroup>
          <p>Error Messages</p>
          <p>An A2-sized print (420mm x 594mm) on a semi-gloss paper, velvet finish that guarantees long-lasting, fade-resistant prints. The paper has deeper colour saturation than matt paper, is thicker than traditional consumer papers and is more resistant to fingerprints and smudges. <strong>£16</strong></p>
          <p>The Surface frame provides a subtle, contemporary surround. The frame is very thin, has a smooth satin texture and comes unglazed, with the image front mounted flush to the surface edge. <strong>£18</strong></p>
          <h2>Total: </h2>
          <button />
        </div>
      </div>
    )
  }
}

export default Product

const dataSize = [
  {
    id: 'a2',
    title: 'A2 Print',
    description: 'An A2-sized print (420mm x 594mm) on a semi-gloss paper, velvet finish that guarantees long-lasting, fade-resistant prints. The paper has deeper colour saturation than matt paper, is thicker than traditional consumer papers and is more resistant to fingerprints and smudges.',
    price: 16
  },
  {
    id: 'a3',
    title: 'A3 Print',
    description: 'An A3-sized print (297mm x 420mm) on a semi-gloss paper, velvet finish that guarantees long-lasting, fade-resistant prints. The paper has deeper colour saturation than matt paper, is thicker than traditional consumer papers and is more resistant to fingerprints and smudges.',
    price: 10
  },
  {
    id: 'digitalDownload',
    title: 'Digital Download',
    description: 'A full resolution jpg file and licence for X.',
    price: 0
  }
]

const dataFrame = [
  {
    id: 'noframe',
    title: 'No Frame',
    description: 'Just the print',
    price: 0
  },
  {
    id: 'budget',
    title: 'Spacer Frame',
    description: 'Contemporary hand-stained finish made from solid ash, delivered fully strung ready for hanging',
    price: {
      a2: 11,
      a3: 8
    }
  },
  {
    id: 'premium',
    title: '',
    description: 'The Surface frame provides a subtle, contemporary surround. The frame is very thin, has a smooth satin texture and comes unglazed, with the image front mounted flush to the surface edge.',
    price: {
      a2: 23.5,
      a3: 18
    }
  }
]

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