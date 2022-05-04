import React from 'react'
import cx from 'classnames'
import * as styles from './styles.module.css'
import { Link } from 'gatsby'
// import {useSiteMetadata} from 'data'

export const Navigation = ({ className }) => {
  // const metadata = useSiteMetadata()
  const year = (new Date()).getFullYear()
  return (
    <nav className={cx(className, styles.navigation)}>
      <ul>
        <li><Link to={'/art'}>Art</Link></li>
        <li className={styles.spacer} />
        <li><Link to={'/herbs'}>Herbs</Link></li>
        <li className={styles.spacer} />
        <li><Link to={'/project-dandelion'}>Project Dandelion</Link></li>
        <li className={styles.spacer} />
        <li><Link to={'/blog/2022/05/01/monte-vista-art-walk-2022.html'}>Art Walk 2022</Link></li>
        <li className={styles.spacer} />
        <li><Link to={'/blog'}>Birdies Blog</Link></li>
        <li className={styles.spacer} />
        <li><Link to={'/about'}>About the Author</Link></li>
      </ul>
    </nav>
  )
}
