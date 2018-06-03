import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const Header = ({ className, title }) => {
  return (
    <header className={className}>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Header
