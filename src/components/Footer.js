import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ className }) => (
  <footer className={className}>The Footer</footer>
)

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer
