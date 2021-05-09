import React from 'react'
import {blogIndexPath} from 'utils'
import { Link, navigate } from 'gatsby'
import * as styles from './styles.module.css'
import cx from 'classnames'
import ReactPaginate from 'react-paginate'

export const FixedList = ({ list, mkElement, className, ...listInfo }) => {
  const { currentPage, maxPage } = listInfo
  const elements = list.map((elem, idx) => (
    <li key={`fixed-list-${elem.id}`} className={styles.li}>{mkElement(elem, idx)}</li>
  ))

  const handlePageClick = (props) => {
    console.log('handlePageClick', props)

    navigate(blogIndexPath(props.selected + 1))
  }

  return (
    <section className={cx(className, styles.fixedList)}>
      <ul className={styles.ul}>
        {elements}
      </ul>
      <footer className={styles.navigation}>
        <ReactPaginate
          pageCount={maxPage} pageRangeDisplayed={2}
          marginPagesDisplayed={2} initialPage={currentPage}
          containerClassName={styles.pagination}
          previousLinkClassName={styles.pageLink}
          nextLinkClassName={styles.pageLink}
          onPageChange={handlePageClick}
          disabledClassName={styles.pageLinkDisabled}
          activeClassName={styles.pageLinkActive}
        />
      </footer>
    </section>
  )
}
