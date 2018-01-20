import React from 'react'
import NavLink from '../components/nav-link'
import styled from 'styled-components'
import { Box } from 'grid-styled'

const P = styled.p`
    text-align: center;
`

const Footer = props => (
    <Box
      pt={2}
      pb={2}
      px={2}
    >
        <P>All images &copy; Chris Hill {(new Date()).getFullYear()} <NavLink ml={2} to="/terms/">terms</NavLink></P>
    </Box>
)

export default Footer
