import React from 'react'
import { Link } from 'gatsby'
import * as styles from './styles.module.css'
import cx from 'classnames'

export const FixedList = ({ list, mkElement, prevPage, nextPage, currentPage, className }) => {

  const elements = list.map((elem, idx) => (
    <li key={`fixed-list-${elem.id}`} className={styles.li}>{mkElement(elem, idx)}</li>
  ))

  return (
    <section className={cx(className, styles.fixedList)}>
      <ul className={styles.ul}>
        {elements}
      </ul>
      <footer className={styles.navigation}>
        <nav>
          {prevPage ? <Link to={prevPage}>Prev</Link> : <span></span>}
          <span className={cx(styles.btn, styles.info)}>Page {currentPage}</span>
          {nextPage ? <Link to={nextPage}>Next</Link> : <span></span>}
        </nav>
      </footer>
    </section>
  )
}
