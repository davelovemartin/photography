import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

const slugify = require(`slugify`)

const ImageLink = styled(Link)`
    & Img {
        transition: all 0.4s ease;
    }
    & svg {
        opacity: 0;
        margin: 1.5rem;
        position: absolute;
        transform: scale(1.165);
        z-index: 2;
        transition: all 0.4s ease;
        & g {
            & text {
                alignment-baseline: middle;
                font-size: 2rem;
                font-weight: 600;
                text-anchor: middle;
            }
        }
    }
    &:hover, &:focus {
        & Img {
            filter: grayscale(100%);
        }
        & svg {
            opacity: 0.8;
            transform: scale(1);
        }
    }
`

const Gallery = props => (
    <Flex wrap direction='row'>
        <Box
            height={'24rem'}
            p={2}
            width={'24rem'}
        >
            <h2>Bristol Photography</h2>
            <p>Ours is a beautiful, inspiring city, full of great photographic opportunities. I’m particularly interested in capturing our landmarks in the transition from day to night, and many of my images include people.</p>
            <p>For me, people make places and one of my aims is to portray the special relationships between this vibrant city and its inhabitants.</p>
            <p>Click on the gallery images to view the full pictures and order prints:</p>
        </Box>
        {props.nodes.map(({ node }) => (
            <Box
                key={node.id}
                height={'24rem'}
                p={2}
                width={'24rem'}
            >
                <ImageLink to={'/gallery/' + slugify(node.title)}>
                    <svg width="304" height="304" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fillRule="evenodd">
                            <path fill="#000" d="M0 0h304v304H0z"/>
                            <text x="152" y="152" fill="#fff">view</text>
                        </g>
                    </svg>
                    <Img
                        resolutions={node.picture.resolutions} 
                    />
                </ImageLink>
            </Box>
        ))}
    </Flex>
)

export default Gallery
