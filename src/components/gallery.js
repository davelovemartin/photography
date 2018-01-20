import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

const slugify = require(`slugify`)

const ImageLink = styled(Link)`
    transition: filter ease 1s;
    &:hover {
        & Img {
            filter: blur(2px) grayscale(100%);
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
                    <Img
                        resolutions={node.picture.resolutions} 
                    />
                </ImageLink>
            </Box>
        ))}
    </Flex>
)

export default Gallery
