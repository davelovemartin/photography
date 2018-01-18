import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
const slugify = require(`slugify`)

const Gallery = props => (
  <div>
      {props.nodes.map(({ node }) => (
          <Link to={'/gallery/' + slugify(node.title)}>
            <Img
                sizes={node.picture.sizes} 
            />
          </Link>
      ))}
  </div>
)

export default Gallery
