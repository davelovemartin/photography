import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import { Box } from 'grid-styled'

class OrderPage extends React.Component {
    
    constructor (props) {
        super(props)
        this.state = { message: '' }
      }
      componentDidMount() {
        this.setState({
            message: this.props.history.location.state.message
        })
      }
      render () {
        return (
                <div>
                    <Header
                        title={'Order: ' + this.props.data.site.siteMetadata.title}
                        description={this.props.data.site.siteMetadata.description}
                        location={this.props.data.site.siteMetadata.location}
                        name={this.props.data.site.siteMetadata.name}
                        fb={this.props.data.site.siteMetadata.fb}
                        instagram={this.props.data.site.siteMetadata.instagram}
                    />
                    <Box 
                        p={2}
                        width={['100%', '100%', '62%']}
                    >
                    <h2>Order Confirmation</h2>
                    <p
                        children={this.state.message}
                    />
                    </Box>
                </div>
        )
    }
}
export default OrderPage

export const query = graphql`
  query OrderQuery {
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