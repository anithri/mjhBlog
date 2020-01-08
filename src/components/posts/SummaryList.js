import React, { useState } from 'react'
import Summary from './Summary'
import faCalendarAlt from '../../images/calendar-alt.svg'
import {Link} from 'gatsby'

export const SummaryList = ({ posts = [], className, title }) => {
  const postSummaries = posts.map(post => (
    <li key={`postSummary-${post.slug}`}>
      <Summary post={post} title={title} />
    </li>
  ))

  return (
    <article className={`${className} postSummaryList`}>
      <header className="postSummaryListHeader">
        <Link to="/blogdex" alt="Posts By Date">
          <img src={faCalendarAlt} alt="By Date" />
        </Link>
        <h3>{title}</h3>
      </header>
      <ul>{postSummaries}</ul>
    </article>
  )
}

export default SummaryList
