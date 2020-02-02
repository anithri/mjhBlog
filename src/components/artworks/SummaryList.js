import React, { useState } from 'react'
import Summary from './Summary'
import faCalendarAlt from '../../images/calendar-alt.svg'
import { Link } from 'gatsby'
import cx from 'classnames'
export const SummaryList = ({ artworks = [], className, title }) => {
  const art = artworks.map((artwork, idx) => (
    <li key={`artSummary-${artwork.slug}`}>
      <Summary artwork={artwork} title={title} idx={idx} />
    </li>
  ))

  return (
    <article className={cx(className, 'artSummaryList')}>
      <ul>{art}</ul>
    </article>
  )
}

export default SummaryList
