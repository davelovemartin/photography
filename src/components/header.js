import React from 'react'
import CustomHelmet from '../components/helmet'
import NavLink from '../components/nav-link'
import styled from 'styled-components'
import { Flex } from 'grid-styled'

const Title = styled.h1`
  display: inline-block;
  margin-bottom: 1rem;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
`

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
    <Flex
      direction={'row'}
      pb={'8rem'}
      pt={2}
      px={2}
    >
      <Title>
        <NavLink to="/">Chris Hill</NavLink>
      </Title>
        <NavLink ml="auto" to="/contact/">contact</NavLink>
    </Flex>
  </div>
)

export default Header
