import React from 'react'
import cx from 'classnames'
import * as styles from './styles.module.css'

export const Blockquote = ({ className, quote }) => {
  const { lines, caption } = quote
  const text = Array.isArray(lines) ? lines.join('<br />') : lines
  return (
    <figure className={cx(className, styles.blockquote)}>
      <blockquote className={styles.quote} dangerouslySetInnerHTML={{ __html: text }} />
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  )
}
