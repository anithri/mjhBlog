import React from 'react'
import cx from 'classnames'
import * as styles from './styles.module.css'
// import {useSiteMetadata} from 'data'

export const Navigation = ({className}) => {
  // const metadata = useSiteMetadata()
  const year = (new Date()).getFullYear()
  return (
    <navigation className={cx(className, styles.navigation)}>
      <ul>
        <li>Art</li>
        <li>Project Dandelion</li>
        <li>Birdies Blog</li>
        <li>About the Author</li>
      </ul>
    </navigation>
  )
}
