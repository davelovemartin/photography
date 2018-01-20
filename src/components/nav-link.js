import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { space } from 'styled-system'

const NavLink = styled(Link)`
    ${space}
    border-bottom: 2px solid white;
    color: black;
    margin-bottom: 0px;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.2s linear;
    &:hover {
        border-bottom: 2px solid black;
        color: black;
        margin-bottom: 0px;
    }
`

export default NavLink