import React from 'react'
import cx from 'classnames'
import * as styles from './styles.module.css'
import { Link } from 'gatsby'

export const NavControls = ({ className, pagination, ...props }) => {
  // console.log('NavControls', pagination)
  const { nextPage, prevPage, firstPage, lastPage, info } = pagination
  // console.log('info.needsPagination()',info.needsPagination(),)
  if (!info.needsPagination()) return null
  return (
    <nav className={cx(className, styles.nav)}>
      {info.hasFirstPage() ? (
        <a className={cx(styles.btn, styles.prev)} onClick={() => firstPage()}>
          First
        </a>
      ) : (
        <span className={cx(styles.btn, styles.prev, styles.disabled)}>First</span>
      )}
      {info.hasPrevPage() ? (
        <a className={cx(styles.btn, styles.prev)} onClick={() => prevPage()}>
          Prev
        </a>
      ) : (
        <span className={cx(styles.btn, styles.prev, styles.disabled)}>Prev</span>
      )}
      <span className={cx(styles.btn, styles.info)}>
        Page {info.currentPage} of {info.maxPage}
      </span>
      {info.hasNextPage() ? (
        <a className={cx(styles.btn, styles.next)} onClick={() => nextPage()}>
          Next
        </a>
      ) : (
        <span className={cx(styles.btn, styles.prev, styles.disabled)}>Next</span>
      )}
      {info.hasLastPage() ? (
        <a className={cx(styles.btn, styles.prev)} onClick={() => lastPage()}>
          Last
        </a>
      ) : (
        <span className={cx(styles.btn, styles.prev, styles.disabled)}>Last</span>
      )}
    </nav>
  )
}
