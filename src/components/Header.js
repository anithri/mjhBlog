import React from 'react'
import Link from 'gatsby-link'

const Header = ({className, siteTitle}) => {
  return (
    <header className={className}>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </header>
  )
}

export default Header
