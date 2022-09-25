import React from 'react'
import cx from 'classnames'
import * as styles from './styles.module.css'
import { useSiteMetadata } from 'data'

const copyrightStr = (established) => {
  const current = new Date().getFullYear()
  const start = parseInt(established)
  const years = [...Array(current + 1 - start).keys()].map((y) => y + start)
  return years.join(',')
}

export const Footer = ({ className, title }) => {
  const { author, designer, established } = useSiteMetadata()
  return (
    <footer className={cx(className, styles.footer)}>
      <ul>
        <li>
          Copyright {copyrightStr(established)} by {author}
        </li>
        <li>{designer}</li>
      </ul>
    </footer>
  )
}
