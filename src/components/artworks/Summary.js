import React from 'react'
import SummaryHeader from './SummaryHeader'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export const Summary = ({ artwork, className }) => {
  const { title, slugPath, summary, art } = artwork

  return (
    <Link to={slugPath} alt={title}>
      <article className={`${className} artSummary`}>
        {/*<SummaryHeader post={post} className="postSummaryHeader" />*/}
        <Img fluid={art.fluid} alt={art.title} />
        <p>{summary}</p>
      </article>
    </Link>
  )
}

export default Summary
