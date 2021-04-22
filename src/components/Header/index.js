import React from 'react'
import cx from 'classnames'
import * as styles from './styles.module.css'

export const Header = ({className, title}) => {
  return (
    <header className={cx(className, styles.header)}>
      <h1>{title}</h1>
    </header>
  )
}
