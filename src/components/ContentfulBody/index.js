import React from 'react'
import cx from 'classnames'
import * as styles from './styles.module.css'

export const ContentfulBody = ({body, className}) => (
  <section className={cx(className, styles.body)}
           dangerouslySetInnerHTML={{__html: body}} />
)
