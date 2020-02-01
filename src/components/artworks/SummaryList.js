import React, { useState } from 'react'
import Summary from './Summary'
import faCalendarAlt from '../../images/calendar-alt.svg'
import {Link} from 'gatsby'

export const SummaryList = ({ artworks = [], className, title }) => {
  const art = artworks.map(artwork => (
    <li key={`artSummary-${artwork.slug}`}>
      <Summary artwork={artwork} title={title} />
    </li>
  ))

  return (
    <article className={`${className} artSummaryList`}>
      {/*<header className="artSummaryListHeader">*/}
      {/*  <Link to="/blogdex" alt="Arts By Date">*/}
      {/*    <img src={faCalendarAlt} alt="By Date" />*/}
      {/*  </Link>*/}
      {/*  <h3>{title}</h3>*/}
      {/*</header>*/}
      <ul>{art}</ul>
    </article>
  )
}

export default SummaryList
