import React from 'react'
import { Link } from 'gatsby'

const Header = ({ className, title }) => {
  return (
    <header className={className}>
      <Link to="/">
        <h1>{title}</h1>
      </Link>
    </header>
  )
}

export default Header
