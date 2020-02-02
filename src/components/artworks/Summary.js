import React from 'react'
import SummaryHeader from './SummaryHeader'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import cx from 'classnames'

export const Summary = ({ artwork, className, idx }) => {
  const { title, slugPath, publishDate, art } = artwork
  const position = [`${Math.floor(Math.random() * 100)}%`, `${Math.floor(Math.random() * 100)}%`].join(' ')
  return (
    <Link to={slugPath} alt={title} className={'artworkSummaryLink'}>
      <article className={cx(className, 'artworkSummary', idx % 2 ? 'even' : 'odd')}>
        {/*<SummaryHeader post={post} className="postSummaryHeader" />*/}
        <Img fluid={art.fluid} alt={art.title} className={'imgWrapper'}
             imgStyle={{ objectPosition: position }} />
        <header>
          <h3>{title}</h3>
        </header>
      </article>
    </Link>
  )
}

export default Summary
