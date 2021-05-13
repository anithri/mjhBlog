import React from 'react'
import cx from 'classnames'
import * as styles from './styles.module.css'

export const Blockquote = ({className, quote, caption}) => (
  <figure className={cx(className, styles.blockquote)}>
    <blockquote className={styles.quote} dangerouslySetInnerHTML={{__html: quote}} />
    <figcaption className={styles.caption}>{caption}</figcaption>
  </figure>
)

