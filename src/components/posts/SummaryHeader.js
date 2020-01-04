import {Link} from 'gatsby'
import React from 'react'

export const SummaryHeader = props => {
  const { post} = props
  const {
    dateStamp,
    publishDate,
    title,
  } = post
  return (
    <header className="postSummaryHeader">
      <h3>{title}</h3>
    </header>
  )
}

export default SummaryHeader
