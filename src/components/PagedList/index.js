import React from 'react'
import { useArrayPagination } from 'data'
import * as styles from './styles.module.css'
import cx from 'classnames'
import { NavControls } from './NavControls'

export const PagedList = ({ list, mkElement, pageSize = 5, startPage = 1, className }) => {
  const pagination = useArrayPagination(list, startPage, pageSize)
  const { shownElements } = pagination

  if (list.length === 0) {
    return (
      <section className={styles.empty}>
        <h3>Nothing to see (yet).</h3>
      </section>
    )
  }

  const elements = shownElements.map((elem, idx) => (
    <li key={`paged-list-${elem.id}`} className={styles.li}>
      {mkElement(elem, idx)}
    </li>
  ))

  return (
    <section className={cx(className, styles.pagedList)}>
      <ul className={styles.ul}>{elements}</ul>
      <footer className={styles.navigation}>
        <NavControls pagination={pagination} />
      </footer>
    </section>
  )
}
