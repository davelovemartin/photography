import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'


class SizeButtonGroup extends React.Component {
  handleSizeClick = () => this.props.onClick(this.props.value)
  render () {
    return <CustomRadioButton 
      aria-checked={this.props.checked}
      onClick={this.handleSizeClick}
      value={this.props.value}
      >
        <label>{this.props.value}</label>
        <Img resolutions={this.props.resolutions} />
    </CustomRadioButton>
  }
}

class FrameButtonGroup extends React.Component {
  handleFrameClick = () => this.props.onClick(this.props.value)
  render () {
    return <CustomRadioButton 
      aria-checked={this.props.checked}
      onClick={this.handleFrameClick}
      value={this.props.value}
      >
        <label>{this.props.value}</label>
        <Img resolutions={this.props.resolutions} />
    </CustomRadioButton>
  }
}
const CustomRadioButton = styled.div`
  text-align: center;
  height: 9rem;
  font-size: 0.75rem;
  line-height: 2;
  & img {
    filter: grayscale(1);
    -webkit-filter: grayscale(1);
    transition: filter .4s ease !important;
    transition: -webkit-filter .4s ease  !important;
  }
  &:hover {
    & img {
      filter: grayscale(0);
      -webkit-filter: grayscale(0);
      cursor: pointer;
    }
  }
  &[aria-checked="true"] {
    & img {
      filter: grayscale(0);
      -webkit-filter: grayscale(0);
    }
  }
`

const Strong = styled.strong`
  float: right;
`

class Product extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      isLandscape: false,
      selectedFrame: '',
      selectedSize: ''
    }
    this.handleSizeClick = this.handleSizeClick.bind(this)
    this.handleFrameClick = this.handleFrameClick.bind(this)
  }

  handleSizeClick (value) {
    this.setState({ selectedSize: value })
  }
  handleFrameClick (value) {
    this.setState({ selectedFrame: value })
  }

  render () {
    const aR = this.props.data.contentfulProduct.picture.resize.aspectRatio
    if (aR > 1) {
      this.setState({ isLandscape: true})
    }
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
        <Flex>
            <Box
              p={2}
            >
              <h2>{this.props.data.contentfulProduct.title}</h2>
            </Box>
        </Flex>
        <Flex wrap>
            <Box
                width={[1, 1, '48rem']}
                p={2}
            >
              <Box mb={5}>
                <Img 
                    sizes={this.props.data.contentfulProduct.picture.sizes}
                    alt={this.props.data.contentfulProduct.picture.description}
                />
              </Box>
              <p>{this.props.data.contentfulProduct.description.description}</p>
          </Box>
          <Box
              width={[1, 1, '24rem']}
              p={2}
          >
            <div role='radiogroup'>
              <p>1. Choose a size:</p>
              <Flex height={'9rem'} justify='space-between' mb={2}>
                <SizeButtonGroup
                  checked={this.state.selectedSize === 'a3'}
                  onClick={this.handleSizeClick}
                  resolutions={this.props.data.a3Png.childImageSharp.resolutions}
                  value={'a3'}
                />
                <SizeButtonGroup
                  checked={this.state.selectedSize === 'a2'}
                  onClick={this.handleSizeClick}
                  resolutions={this.props.data.a2Png.childImageSharp.resolutions}
                  value={'a2'}
                />
                <SizeButtonGroup
                  checked={this.state.selectedSize === 'digitalDownload'}
                  onClick={this.handleSizeClick}
                  resolutions={this.props.data.downloadPng.childImageSharp.resolutions}
                  value={'digitalDownload'}
                />
              </Flex>
            </div>
            <div role='radiogroup'>
              <p>2. Choose a frame:</p>
              <Flex height={'9rem'} justify='space-between' mb={2}>
                <FrameButtonGroup
                  checked={this.state.selectedFrame === 'noFrame'}
                  onClick={this.handleFrameClick}
                  resolutions={this.props.data.noframePng.childImageSharp.resolutions}
                  value='noFrame'
                />
                <FrameButtonGroup
                  checked={this.state.selectedFrame === 'standard'}
                  onClick={this.handleFrameClick}
                  resolutions={this.props.data.budgetPng.childImageSharp.resolutions}
                  value='standard'
                />
                <FrameButtonGroup
                  checked={this.state.selectedFrame === 'deluxe'}
                  onClick={this.handleFrameClick}
                  resolutions={this.props.data.deluxePng.childImageSharp.resolutions}
                  value='deluxe'
                />
              </Flex>
            </div>
            <p><b>Room left for error messages</b></p>
            <p>An A2-sized print (420mm x 594mm) on a semi-gloss paper, velvet finish that guarantees long-lasting, fade-resistant prints. The paper has deeper colour saturation than matt paper, is thicker than traditional consumer papers and is more resistant to fingerprints and smudges. <Strong>£16</Strong></p>
            <br />
            <p>The Surface frame provides a subtle, contemporary surround. The black frame is very thin, has a smooth satin texture and comes unglazed, with the image front mounted flush to the surface edge. <Strong>£18</Strong></p>
            <Flex mt={2}>
              <Box>
                <h2>Total: <strong>£34</strong></h2>
              </Box>
              <Box ml='auto' pt={1}>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="XBVNWNYL9W3NL" />
                  <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
                  <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
                </form>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Footer />
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
    a2Png: file(relativePath: { eq: "A2.png" }) {
      childImageSharp {
        resolutions(width: 112, height: 120) {
          ...GatsbyImageSharpResolutions
        } 
      }
    }
    a3Png: file(relativePath: { eq: "a3.png" }) {
      childImageSharp {
        resolutions(width: 112, height: 120) {
          ...GatsbyImageSharpResolutions
        } 
      }
    }
    downloadPng: file(relativePath: { eq: "download.png" }) {
      childImageSharp {
        resolutions(width: 112, height: 120) {
          ...GatsbyImageSharpResolutions
        } 
      }
    }
    noframePng: file(relativePath: { eq: "noframe.png" }) {
      childImageSharp {
        resolutions(width: 112, height: 120) {
          ...GatsbyImageSharpResolutions
        } 
      }
    }
    budgetPng: file(relativePath: { eq: "budget.png" }) {
      childImageSharp {
        resolutions(width: 112, height: 120) {
          ...GatsbyImageSharpResolutions
        } 
      }
    }
    deluxePng: file(relativePath: { eq: "deluxe.png" }) {
      childImageSharp {
        resolutions(width: 112, height: 120) {
          ...GatsbyImageSharpResolutions
        } 
      }
    }
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
        description
      }
      picture {
        sizes(maxWidth: 800) {
          ...GatsbyContentfulSizes
        }
        resize (width: 800) {
          height
          aspectRatio
        }
      } 
    }
  }
`