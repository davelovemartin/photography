import React from 'react'
import PropTypes from 'prop-types'

const TemplateWrapper = ({ children }) => (
  <div>
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
