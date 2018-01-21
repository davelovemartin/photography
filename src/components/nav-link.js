import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { space } from 'styled-system'

const NavLink = styled(Link)`
    ${space}
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    margin-bottom: 1rem;
    ::after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        background: #000;
        transition: width .4s ease;
    }
    &:hover::after, &:focus::after {
        width: 100%;
    }
`

export default NavLink