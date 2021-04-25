import React from 'react'
import {useArrayPagination} from 'data'
import { Layout } from '../Layout'

export const PagedList = ({list, mkElement, pageSize = 5, startPage = 1, className}) => {
  const [shownElements, nextPage, prevPage, info] = useArrayPagination(list, startPage, pageSize)

  const elements = shownElements.map(elem => (
    <li key={`paged-list-${elem.id}`}>{mkElement(elem)}</li>
  ))

  return (
    <section>
      <ul className={className}>
        {elements}
      </ul>
      <footer>
        <nav>
          {info.hasPrevPage() ? <a onClick={() => prevPage()}>Prev</a> : <span></span>}
          {info.hasNextPage() ? <a onClick={() => nextPage()}>Next</a> : <span></span>}
        </nav>
      </footer>
    </section>
  )
}
