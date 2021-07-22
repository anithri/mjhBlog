import React from 'react'
import cx from 'classnames'
import * as styles from './styles.module.css'
import { mkBlogEntry } from 'utils'
import { Link } from 'gatsby'

export const BlogSummary = ({ post, className }) => {
  // console.log('BlogSummary', post)
  const path = mkBlogEntry(post)
  const { title, summary, publishOn } = post
  return (
    <article className={cx(className, styles.summary)}>
      <Link to={path}><h3>{title}</h3></Link>
      <p>{summary}</p>
    </article>
  )
}
