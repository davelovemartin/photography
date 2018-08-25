import React, { Children } from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import CustomStripeCheckout from '../components/CustomStripeCheckout'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { Transition } from 'react-transition-group'

class SizeButtonGroup extends React.Component {
  handleSizeClick = () => this.props.onClick(this.props.value)
  render () {
    return <CustomRadioButton 
      aria-checked={this.props.checked}
      onClick={this.handleSizeClick}
      value={this.props.value}
      selected={this.props.selected}
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
      selected={this.props.selected}
      >
        <label>{this.props.title}</label>
        <Img resolutions={this.props.resolutions} />
    </CustomRadioButton>
  }
}

const defaultStyle = {
  transition: `opacity`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const Fade = ({ in: inProp, timeout: durationProp, children, ...props }) => (
  <Transition
    in={inProp}
    timeout={durationProp}
    {...props}
  >
  {(state, timeout) => (
    <div style={{
      ...defaultStyle,
      ...transitionStyles[state]
    }}>
      {children}
    </div>
    )}
  </Transition>
)

function Description (props) {
  return (
    <Fade in={props.selected} timeout={props.duration}>
      <p>{props.description}<Strong>{props.price ? '£' + props.price / 100 : ''}</Strong></p>
    </Fade>
  )
}

const CustomRadioButton = styled.div`
  text-align: center;
  height: 9rem;
  font-size: 0.75rem;
  line-height: 2;
  transition: opacity .35s ease !important;
  & img {
    filter: grayscale(1);
    -webkit-filter: grayscale(1);
    transition: filter .35s ease !important;
    transition: -webkit-filter .35s ease  !important;
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
      size: false,
      selectedSize: {
        id: false,
        description: '',
        price: 0
      },
      selectedFrame: {
        id: false,
        description: '',
        price: 0
      },
      activateButton: false
    }
    this.handleSizeClick = this.handleSizeClick.bind(this)
    this.handleFrameClick = this.handleFrameClick.bind(this)
  }

  handleSizeClick (value) {
    const sizes = data.size
    const s = sizes.filter(size => size.id === value)
    this.setState({
      print: true,
      size: true,   
      selectedSize: {
        id: s[0].id,
        description: s[0].description,
        price: s[0].price
      }
    })
    if (this.state.selectedFrame.id){
      this.setState({
        activateButton: true
      })
    } else {
      this.setState({
        activateButton: false
      })
    }
  }
  handleFrameClick (value) {
    const frames = data.frame
    const f = frames.filter(frame => frame.id === value)
    const p = f[0].prices.filter(price => price.id === value)
    this.setState({
      activateButton: true,
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
              <p>{this.props.data.contentfulProduct.location}</p>
              <p>{this.props.data.contentfulProduct.description.description}</p>
              <p>Printed on {this.props.data.contentfulProduct.paper.paperType}  {this.props.data.contentfulProduct.paper.weight}gsm paper. {this.props.data.contentfulProduct.paper.description}</p>
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
                  selected={true}
                  title='A3'
                />
                <SizeButtonGroup
                  checked={this.state.selectedSize.id === 'a2'}
                  onClick={this.handleSizeClick}
                  resolutions={this.props.data.a2Png.childImageSharp.resolutions}
                  value={'a2'}
                  selected={true}
                  title='A2'
                />
              </Flex>
            </div>
            <Description
              description={this.state.selectedSize.description}
              price={this.state.selectedSize.price}
              selected={this.state.size ? true : false}
              duration={300}
            />
            <Fade
              timeout={600}
              in={this.state.print ? true : false}
              role='radiogroup'
            >
              <p>2. Choose a frame:</p>
            </Fade>
            <Fade
              timeout={900}
              in={this.state.print ? true : false}
              role='radiogroup'
            >
              <Flex height={'9rem'} justify='space-between' mb={2}>
                <FrameButtonGroup
                  checked={this.state.selectedFrame.id === 'noFrame'}
                  onClick={this.handleFrameClick}
                  resolutions={this.props.data.noframePng.childImageSharp.resolutions}
                  value='noFrame' 
                  title={'None'}
                />
                <FrameButtonGroup
                  checked={this.state.selectedFrame.id === 'black'}
                  onClick={this.handleFrameClick}
                  resolutions={this.props.data.blackPng.childImageSharp.resolutions}
                  value='black'
                  title={'Black'}
                />
                <FrameButtonGroup
                  checked={this.state.selectedFrame.id === 'white'}
                  onClick={this.handleFrameClick}
                  resolutions={this.props.data.whitePng.childImageSharp.resolutions}
                  value='white'
                  title={'White'}
                />
              </Flex>
            </Fade>
            <Description
              description={this.state.selectedFrame.description}
              price={this.state.selectedFrame.price}
              selected={this.state.print ? true : false}
              duration={400}
            />
            <Flex mt={2}>
              <Box>
                <h2>Total: <strong>{ '£' + (this.state.selectedSize.price / 100 + this.state.selectedFrame.price / 100)}</strong></h2>
              </Box>
              <Box ml='auto' pt={1}>
                <CustomStripeCheckout
                  amount={this.state.selectedSize.price + this.state.selectedFrame.price}
                  billingAddress
                  currency='GBP'
                  description={this.state.selectedSize.description + this.state.selectedSize.description}
                  frame={this.state.selectedFrame.id}
                  locale='en'
                  name={this.props.data.site.siteMetadata.name}
                  panelLabel='BUY NOW'
                  photoUrl={this.props.data.contentfulProduct.picture.resolutions.src}
                  reconfigureOnUpdate
                  shippingAddress
                  size={this.state.selectedSize.id}
                  selected={this.state.activateButton}
                  stripeKey={this.props.data.site.siteMetadata.stripe}
                  triggerEvent={'onClick'}
                  zipCode
                />
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
      description: 'An A2-sized print (420mm x 594mm)',
      price: 5000
    },
    {
      id: 'a3',
      title: 'A3 Print',
      description: 'An A3-sized print (297mm x 420mm)',
      price: 4000
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
        }
      ]
    },
    {
      id: 'black',
      title: 'Black',
      description: 'A black box frame with a 1.4mm mount',
      prices: [
        {
          id: 'a2',
          price: 5000
        },
        {
          id: 'a3',
          price: 4000
        }
      ]
    },
    {
      id: 'white',
      title: 'White',
      description: 'A white box frame with a 1.4mm mount',
      prices: [
        {
          id: 'a2',
          price: 5000
        },
        {
          id: 'a3',
          price: 4000
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
    blackPng: file(relativePath: { eq: "black.png" }) {
      childImageSharp {
        resolutions(width: 112, height: 120) {
          ...GatsbyImageSharpResolutions
        } 
      }
    }
    whitePng: file(relativePath: { eq: "white.png" }) {
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
        instagram,
        stripe
      }
    }
    contentfulProduct(title: { eq: $title } ) {
      title
      description {
        description
      }
      location
      paper {
        weight
        paperType
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
        resolutions {
          src
        }
      } 
    }
  }
`