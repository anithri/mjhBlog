import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
const Header = ({ className, title }) => {
  return (
    <header className={className}>
      <Link to="/">
        <h1>{title}</h1>
      </Link>
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Header
