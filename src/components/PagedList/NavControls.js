import React from 'react'
import cx from 'classnames'
import * as styles from './styles.module.css'

export const NavControls = ({ className, pagination }) => {
  const [_, nextPage, prevPage, pageJump, info] = pagination
  return (
    <nav className={cx(className, styles.nav)}>
      {info.hasPrevPage() ?
        <a className={cx(styles.btn, styles.prev)} onClick={() => prevPage()}>Prev</a> :
        <span></span>}
      <span className={cx(styles.btn, styles.info)}>
        Page {info.currentPage} of {info.maxPage}
      </span>
      {info.hasNextPage() ?
        <a className={cx(styles.btn, styles.next)} onClick={() => nextPage()}>Next</a> :
        <span></span>}
    </nav>
  )
}
