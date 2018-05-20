import React from 'react'
import Link from 'gatsby-link'

const Header = (props) => {
  console.log(props)
  return (
    <header>
      <h1>
        <Link to="/">
          {props.title}
        </Link>
      </h1>
    </header>
  )
}

export default Header
