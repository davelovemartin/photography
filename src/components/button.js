import React from 'react'
import styled, { css } from 'styled-components'

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
        border: 1px ridge white;
        background-color: black;
        color: white;
        cursor: pointer;
        transition:  0.2s linear;
        -webkit-transition:  0.2s linear;
        -moz-transition:  0.2s linear;
    }
    &:disabled {
        color: #999;
        cursor: none;
        border: 1px ridge #eee;
        background-color: #eee;
    }
`
export default Button