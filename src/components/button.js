import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    color: black;
    border: 1px ridge black;
    background-color: white;
    margin-right: 1rem;
    padding: 0.5rem 2rem;
    text-decoration: none;
    transition:  0.2s linear;
    -webkit-transition:  0.2s linear;
    -moz-transition:  0.2s linear;
    &:hover {
        color: white;
        border: 1px ridge white;
        background-color: black;
        transition:  0.2s linear;
        -webkit-transition:  0.2s linear;
        -moz-transition:  0.2s linear;
    }
`
export default Button