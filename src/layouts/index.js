import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { injectGlobal } from 'styled-components'
import { Box } from 'grid-styled'
import styled from 'styled-components'

const Container = styled(Box)`
  margin-left: auto;
  margin-right: auto;
`

injectGlobal`
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    font-size: 100%;
    line-height: 1.5;
  }
  body {
    margin: 0;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-weight: 300;
  }
  h1, h2 {
    font-weight: 300;
    text-transform: uppercase;
  }
  h1 {
    font-size: 2rem;
    line-height: 1;
    margin-bottom: 1.5rem;
  }
  h2 {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
  input, textarea {
    font-size: 0.75rem;
    line-height: 2;
  }
  p {
    text-align: justify;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    margin-bottom: 1.5rem;
  }
`


const TemplateWrapper = ({ children }) => (
  <ThemeProvider
    theme={{
      breakpoints: [ 54, 80, 106 ],
      fontSizes: [
        '0.5rem', '1rem', '2rem'
      ],
      space: [ 0, '0.5rem', '1rem', '1.5rem', '2rem', '3rem', '4rem', '8rem', '16rem' ]
    }}
  >
    <Container
      width={[ '28rem', '54rem', '80rem', '106rem']}
      p={2}
    >
    {children()}
    </Container>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
