import React from 'react'
import Link from 'gatsby-link'
import _flatten from 'lodash/flatten'
import feather from '../images/feather.svg'
import PropTypes from 'prop-types'

const Spacer = ({ idx }) => {
  if (idx === 0) return null
  return (
    <li key={`pageNavSpace${idx}}`}>
      <img src={feather} />
    </li>
  )
}

const Nav = ({ pages, className }) => {
  const links = _flatten(
    pages.map(({ linkName, slug }, idx) => {
      return [
        <Spacer idx={idx} key={`pageNavSpacer>${idx}`} />,
        <li key={`pageNav-${slug}-${idx}`}>
          <Link to={slug} activeClassName={'currentPage'}>
            {linkName}
          </Link>
        </li>,
      ]
    })
  )
  return (
    <nav className={className}>
      <ul>{links}</ul>
    </nav>
  )
}

export default Nav
