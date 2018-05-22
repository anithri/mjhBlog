import React from 'react'
import Link from 'gatsby-link'
import _flatten from 'lodash/flatten'
import feather from '../images/feather.svg';

const Spacer = ({ idx }) => {
  if (idx === 0) return null
  return (
    <li key={`pageNavSpace${idx}}`}>
      <img src={feather} />
    </li>
  )
}


const Nav = ({ pages, className }) => {
  const links = _flatten(pages.map(({ linkName, slug }, idx) => {
    return [
      (<Spacer idx={idx} />),
      (<li key={`pageNav-${slug}`}>
        <Link to={`${slug}.html`} activeClassName={'currentPage'}>
          {linkName}
        </Link>
      </li>),
    ]
  }))
  return (
    <nav className={className}>
      <ul>
        {links}
      </ul>
    </nav>
  )
}

export default Nav
