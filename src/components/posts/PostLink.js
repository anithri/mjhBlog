import Link from 'gatsby-link'
import React from 'react'
import PropTypes from 'prop-types'
import Slug from '../../utils/Slug'
import { postShape } from '../../containers/post'

export const PostLink = props => {
  const { post, title: linkTitle, className, activeClassName } = props
  const { slugPath, skipDate, displayTitle, dateStamp } = post
  const LinkName = skipDate ? (
    <span>{displayTitle}</span>
  ) : (
    <time dateTime={dateStamp.format()}>{displayTitle}</time>
  )

  return (
    <Link
      to={slugPath}
      className={className}
      activeClassName={activeClassName}
      alt={displayTitle}
    >
      {LinkName}
    </Link>
  )
}

PostLink.propTypes = {
  post: postShape,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
}

PostLink.defaultProps = {
  activeClassName: 'currentPage',
  className: 'postLink',
}

export default PostLink
