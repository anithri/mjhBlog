import React from 'react'
import PostLink from '../components/PostLink'
import PropTypes from 'prop-types'

export const PostSummary = ({ post, className }) => {
  const { summary, publishDate, dateTime } = post

  return (
    <article className={`${className} postSummary`}>
      <header>
        <h3>
          <PostLink post={post} className="postSummaryLink" />
        </h3>
        <time dateTime={dateTime}>{publishDate}</time>
      </header>
      <p>{summary}</p>
    </article>
  )
}

PostSummary.propTypes = {
  className: PropTypes.string,
  post: PropTypes.shape({
    publishDate: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }),
}

export default PostSummary
