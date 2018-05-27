import React from 'react'
import Summary from './Summary'
import PropTypes from 'prop-types'

export const SummaryList = ({ posts, className }) => {
  const postSummaries = posts.map(post => (
    <li key={`postSummary-${post.slug}`}>
      <Summary post={post} />
    </li>
  ))

  return (
    <ul className={className}>
      {postSummaries}
    </ul>
  )
}

SummaryList.propTypes = {
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

SummaryList.defaultProps = {
  className: 'postSummary',
}
export default SummaryList
