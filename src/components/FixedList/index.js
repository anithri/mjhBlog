import React from 'react'
import { blogIndexPath } from 'utils'
import { Link, navigate } from 'gatsby'
import * as styles from './styles.module.css'
import cx from 'classnames'
import ReactPaginate from 'react-paginate'
import { NavControls } from './NavControls'

export const FixedList = ({ list, mkElement, className, ...listInfo }) => {
  const { initialPage, maxPage, firstPage, prevPage, nextPage, lastPage } = listInfo
  console.log('listInfo', listInfo)
  const elements = list.map((elem, idx) => (
    <li key={`fixed-list-${elem.id}`} className={styles.li}>{mkElement(elem, idx)}</li>
  ))

  const handlePageClick = ({ selected }) => {
    console.log('handlePageClick page', selected)

    navigate(blogIndexPath(selected + 1))
  }

  return (
    <section className={cx(className, styles.fixedList)}>
      <ul className={styles.ul}>
        {elements}
      </ul>
      <footer className={styles.navigation}>
        <NavControls />
      </footer>
    </section>
  )
}
