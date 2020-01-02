import React from 'react'
import SummaryHeader from './SummaryHeader'
import {Link} from 'gatsby'

export const Summary = ({ post, className }) => {
  const {title, slugPath, summary, publishDate, dateStamp } = post

  return (
    <Link to={slugPath} alt={title}>
      <article className={`${className} postSummary`}>
        <SummaryHeader post={post} className="postSummaryLink" />
        <p>{summary}</p>
      </article>
    </Link>
  )
}

export default Summary
