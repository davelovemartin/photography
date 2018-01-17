import React from 'react'
import Link from 'gatsby-link'
import CustomHelmet from '../components/helmet'

const Header = props => (
  <div>
    <CustomHelmet
        title={props.title}
        description={props.description}
        location={props.location}
        name={props.name}
        fb={props.fb}
        instagram={props.instagram}
    />
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Chris Hill
        </Link>
      </h1>
      <Link to="/about/">about</Link>
      <Link to="/contact/">contact</Link>
      <h2>Bristol Photography</h2>
    </div>
  </div>
)

export default Header