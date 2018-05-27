import React from 'react'
import PostSummary from './PostSummary'
import PropTypes from 'prop-types'

export const PostSummaryList = ({ posts, className }) => {
  const postSummaries = posts.map(post => (
    <li key={`postSummary-${post.slug}`}>
      <PostSummary post={post} />
    </li>
  ))

  return <ul className={className}>{postSummaries}</ul>
}

PostSummaryList.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      publishDate: PropTypes.string.isRequired,
      dateTime: PropTypes.string.isRequired,
    })
  ),
}

PostSummaryList.defaultProps = {
  className: 'postSummary',
}
export default PostSummaryList
