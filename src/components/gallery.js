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
    }
    &:hover, &:focus {
        & Img {
            filter: grayscale(100%);
        }
        & svg {
            opacity: 1;
            transform: scale(1);
        }
    }
`

const Gallery = props => (
    <Flex wrap direction='row'>
        <Box
            height={'26rem'}
            p={2}
            width={'26rem'}
        >
            <h2>Bristol Photography</h2>
            <p>Photography has long been a passion of mine. Over the past year I’ve been inspired to push myself and develop my skills by members of the talented Bristol Instagram community.</p>
            <p>Ours is a beautiful, inspiring city, full of great photographic opportunities. I’m particularly interested in capturing our landmarks in the transition from day to night, and many of my images include people.</p>
            <p>For me, people make places and one of my aims is to portray the special relationships between this vibrant city and its inhabitants.</p>
        </Box>
        {props.nodes.map(({ node }) => (
            <Box
                key={node.id}
                height={'26rem'}
                p={2}
                width={'26rem'}
            >
                <ImageLink to={'/gallery/' + slugify(node.title)}>
                    <svg width="336" height="336" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#000" d="M0 0h336v336H0z"/>
                            <path d="M233.583 162.173C220.453 139.892 195.965 125 168.065 125c-27.91 0-52.393 14.902-65.517 37.173a11.177 11.177 0 0 0 0 11.35c13.13 22.28 37.618 37.171 65.517 37.171 27.912 0 52.394-14.902 65.518-37.172a11.177 11.177 0 0 0 0-11.35zm-65.518 37.344c-23.881 0-44.731-12.738-55.887-31.67 10.282-17.45 28.8-29.637 50.336-31.438a12.995 12.995 0 0 1 3.688 9.083c0 7.202-5.838 13.04-13.04 13.04-7.202 0-13.04-5.838-13.04-13.04v-.01a31.527 31.527 0 0 0-3.726 14.914c0 17.49 14.179 31.67 31.67 31.67 17.49 0 31.669-14.18 31.669-31.67a31.529 31.529 0 0 0-6.496-19.215c12.947 5.391 23.73 14.815 30.714 26.666-11.156 18.932-32.006 31.67-55.888 31.67z" fill="#FFF" fill-rule="nonzero"/>
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
