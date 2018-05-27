import React from 'react'
import Link from 'gatsby-link'
import {postSlugFrom} from '../utils/postSlug'
import PropTypes from 'prop-types';

export const PostLink = ({post, className, activeClassName}) => {
  const { title, slug, dateTime } = post
  return (
    <Link to={postSlugFrom(slug, dateTime, '/')}
          className={className}
          activeClassName={activeClassName}>
      {title}
    </Link>
  )
}

PostLink.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
  }),
  className: PropTypes.string,
  activeClassName: PropTypes.string
}

PostLink.defaultProps = {
  activeClassName: 'currentPage',
  className: 'postLink'
}


export default PostLink
