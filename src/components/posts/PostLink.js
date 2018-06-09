import Link from 'gatsby-link'
import React from 'react'
import PropTypes from 'prop-types'
import Slug from '../../utils/Slug'
import {postShape} from '../../containers/post'

export const PostLink = ({ post, className, activeClassName }) => {
  const { title, slug, dateStamp, publishDate } = post
  return (
    <Link
      to={Slug.post(slug, dateStamp)}
      className={className}
      activeClassName={activeClassName}
    >
      <time dateTime={dateStamp.format()}>{publishDate} - </time>
      {title}
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
