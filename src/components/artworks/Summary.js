import React from 'react'
import SummaryHeader from './SummaryHeader'
import { Link } from 'gatsby'

export const Summary = ({ artwork, className }) => {
  const { title, slugPath, summary } = artwork

  return (
    <Link to={slugPath} alt={title}>
      <article className={`${className} artSummary`}>
        {/*<SummaryHeader post={post} className="postSummaryHeader" />*/}
        <p>{summary}</p>
      </article>
    </Link>
  )
}

export default Summary
