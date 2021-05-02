import React from 'react'
import { useArrayPagination } from 'data'
import * as styles from './styles.module.css'
import cx from 'classnames'

export const PagedList = ({ list, mkElement, pageSize = 5, startPage = 1, className }) => {
  const [shownElements, nextPage, prevPage, info] = useArrayPagination(list, startPage, pageSize)

  const elements = shownElements.map((elem, idx) => (
    <li key={`paged-list-${elem.id}`} className={styles.li}>{mkElement(elem, idx)}</li>
  ))

  return (
    <section className={cx(className, styles.pagedList)}>
      <ul className={styles.ul}>
        {elements}
      </ul>
      <footer className={styles.navigation}>
        <nav>
          {info.hasPrevPage() ? <a className={cx(styles.btn,styles.prev)} onClick={() => prevPage()}>Prev</a> : <span></span>}
          <span className={cx(styles.btn, styles.info)}>Page {info.currentPage} of {info.maxPage}</span>
          {info.hasNextPage() ? <a className={cx(styles.btn,styles.next)} onClick={() => nextPage()}>Next</a> : <span></span>}
        </nav>
      </footer>
    </section>
  )
}
