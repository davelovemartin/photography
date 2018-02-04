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
        <label>{this.props.title}</label>
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
        <label>{this.props.title}</label>
        <Img resolutions={this.props.resolutions} />
    </CustomRadioButton>
  }
}

function Description (props) {
  return (
    <div>
      <p>{props.description}<Strong>{props.price ? '£' + props.price : ''}</Strong></p>
    </div>
  )
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
      print: false,
      selectedSize: {
        id: '',
        description: '',
        price: 0
      },
      selectedFrame: {
        id: '',
        description: '',
        price: 0
      }
    }
    this.handleSizeClick = this.handleSizeClick.bind(this)
    this.handleFrameClick = this.handleFrameClick.bind(this)
  }

  handleSizeClick (value) {
    const sizes = data.size
    const s = sizes.filter(size => size.id === value)
    if (value !== 'dd') {
      this.setState({
        print: true,     
        selectedSize: {
          id: s[0].id,
          description: s[0].description,
          price: s[0].price
        }
      })
    } else {
      this.setState({
        print: false,     
        selectedSize: {
          id: s[0].id,
          description: s[0].description,
          price: s[0].price
        },
        selectedFrame: {
          id: '',
          description: '',
          price: 0
        }
      })
    }
  }
  handleFrameClick (value) {
    const frames = data.frame
    const f = frames.filter(frame => frame.id === value)
    const p = f[0].prices.filter(price => price.id === value)
    this.setState({
      selectedFrame: {
        id: f[0].id,
        description: f[0].description,
        price: f[0].prices[0].price
      }
    })
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
                  checked={this.state.selectedSize.id === 'a3'}
                  onClick={this.handleSizeClick}
                  resolutions={this.props.data.a3Png.childImageSharp.resolutions}
                  value={'a3'}
                  title='A3'
                />
                <SizeButtonGroup
                  checked={this.state.selectedSize.id === 'a2'}
                  onClick={this.handleSizeClick}
                  resolutions={this.props.data.a2Png.childImageSharp.resolutions}
                  value={'a2'}
                  title='A2'
                />
                <SizeButtonGroup
                  checked={this.state.selectedSize.id === 'dd'}
                  onClick={this.handleSizeClick}
                  resolutions={this.props.data.downloadPng.childImageSharp.resolutions}
                  value={'dd'}
                  title='Download'
                />
              </Flex>
            </div>
            <Description
              description={this.state.selectedSize.description}
              price={this.state.selectedSize.price}
            />
            {
              this.state.print
              ? <div role='radiogroup'>
                  <p>2. Choose a frame:</p>
                  <Flex height={'9rem'} justify='space-between' mb={2}>
                    <FrameButtonGroup
                      checked={this.state.selectedFrame.id === 'noFrame'}
                      onClick={this.handleFrameClick}
                      resolutions={this.props.data.noframePng.childImageSharp.resolutions}
                      value='noFrame'
                      title={'None'}
                    />
                    <FrameButtonGroup
                      checked={this.state.selectedFrame.id === 'standard'}
                      onClick={this.handleFrameClick}
                      resolutions={this.props.data.budgetPng.childImageSharp.resolutions}
                      value='standard'
                      title={'Spacer'}
                    />
                    <FrameButtonGroup
                      checked={this.state.selectedFrame.id === 'deluxe'}
                      onClick={this.handleFrameClick}
                      resolutions={this.props.data.deluxePng.childImageSharp.resolutions}
                      value='deluxe'
                      title={'Surface'}
                    />
                  </Flex>
                </div>
              : ''
            }
            { this.state.print
              ? <Description
              description={this.state.selectedFrame.description}
              price={this.state.selectedFrame.price}
            /> : ''
            }
            <Flex mt={2}>
              <Box>
                <h2>Total: <strong>{ '£' + (this.state.selectedSize.price + this.state.selectedFrame.price)}</strong></h2>
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

const data = {
  size: [
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
      id: 'dd',
      title: 'Digital Download',
      description: 'A full resolution jpg file and licence for X.',
      price: 0
    }
  ],
  frame: [
    {
      id: 'noFrame',
      title: 'No Frame',
      description: 'Just the print',
      prices: [
        {
          id: 'a2',
          price: 0
        },
        { 
          id: 'a3',
          price: 0
        },
        { id: 'dd',
          price: 0
        }
      ]
    },
    {
      id: 'standard',
      title: 'Spacer Frame',
      description: 'Contemporary hand-stained finish made from solid ash, delivered fully strung ready for hanging',
      prices: [
        {
          id: 'a2',
          price: 11
        },
        {
          id: 'a3',
          price: 8
        },
        {
          id: 'dd',
          price: 0
        }
      ]
    },
    {
      id: 'deluxe',
      title: 'Surface frame',
      description: 'The Surface frame provides a subtle, contemporary surround. The frame is very thin, has a smooth satin texture and comes unglazed, with the image front mounted flush to the surface edge.',
      prices: [
        {
          id: 'a2',
          price: 24
        },
        {
          id: 'a3',
          price: 18
        },
        {
          id: 'dd',
          price: 0
        }
      ]
    }
  ]
}

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