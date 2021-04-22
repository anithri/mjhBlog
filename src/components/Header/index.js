import React from 'react'
import cx from 'classnames'
import * as styles from './styles.module.css'
import { useSiteMetadata } from 'data'

export const Header = ({ className }) => {
  const metadata = useSiteMetadata()
  return (
    <header className={cx(className, styles.header)}>
      <h1>{metadata.title}</h1>
    </header>
  )
}
