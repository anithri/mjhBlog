import React, { useState } from 'react'
import Summary from './Summary'
import SummaryHeader from './SummaryHeader'

export const SummaryList = ({ posts = [], className, title }) => {
  const postSummaries = posts.map(post => (
    <li key={`postSummary-${post.slug}`}>
      <Summary post={post} title={title} />
    </li>
  ))

  return (
    <article className={`${className} postSummary`}>
      <header className="postSummaryHeader">
        <h3>{title}</h3>
      </header>
      <ul>{postSummaries}</ul>
    </article>
  )
}

export default SummaryList
