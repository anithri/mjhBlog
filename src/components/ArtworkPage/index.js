import React, { useState } from 'react'
import * as styles from './styles.module.css'
import linkifyHtml from 'linkifyjs/html'
import { Link } from 'gatsby'
import { FeaturedImage, Layout } from 'components'
import cx from 'classnames'

const MiniNav = ({ prev, next, all, className }) => {
  return (
    <nav className={cx(className, styles.miniNav)}>
      {prev && (
        <Link className={styles.prev} to={prev.path}>
          <span className={styles.arrow}>⮈</span> {prev.title}
        </Link>
      )}

      <Link to={all.path} className={styles.all}>
        All <span className={styles.arrow}>⮉</span>
      </Link>

      {next && (
        <Link className={styles.next} to={next.path}>
          {next.title} <span className={styles.arrow}>⮊</span>
        </Link>
      )}
    </nav>
  )
}

export const ArtworkPage = ({ data, location, pageContext, className, ...props }) => {
  const { title, summary, slug, publishOn, art, fullscreen } = data.herb
  const { next, prev, all } = pageContext
  const formattedSummary = linkifyHtml(summary || '')
  const [isMax, toggleMax] = useState(false)

  return (
    <Layout title={title} className={cx(className, styles.herbPage, isMax && styles.max)}>
      <h2>{title}</h2>
      <p className={styles.summary} dangerouslySetInnerHTML={{ __html: formattedSummary }} />
      <MiniNav next={next} prev={prev} all={all} />
      <div onClick={() => toggleMax(!isMax)}>
        <FeaturedImage image={fullscreen} alt={title} />
      </div>
      <MiniNav next={next} prev={prev} all={all} />
    </Layout>
  )
}
