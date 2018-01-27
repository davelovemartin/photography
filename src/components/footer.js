import React from 'react'
import NavLink from '../components/nav-link'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

const Footer = props => (
    <Flex
      direction={'row'}
      mb={2}
      mt={2}
      px={2}
      w={[ '24rem', '48rem', '72rem', '96rem' ]}
    >
        <Box>
            <p>All images &copy; Chris Hill {(new Date()).getFullYear()} </p>
        </Box>
        <Box ml="auto">
          <NavLink to="/terms/">terms and conditions</NavLink>
        </Box>
    </Flex>        
)

export default Footer
