import { useState } from 'react'

export const useArrayPagination = (arr,  idx = 1, pageSize = 5) => {
  const [currentPage, setCurrentPage] = useState(idx)
  const maxPage = Math.ceil(arr.length / pageSize)
  const nextPage = () => setCurrentPage(pn => Math.min(pn + 1, maxPage))
  const prevPage = () => setCurrentPage(pn => Math.max(pn - 1, 1))
  const pageJump = (page) => setCurrentPage(() => page)
  const hasNextPage = () => currentPage + 1 <= maxPage
  const hasPrevPage = () => currentPage > 1
  const hasFirstPage = () => currentPage != 1
  const hasLastPage = () => currentPage != maxPage
  const firstPage = () => setCurrentPage(1)
  const lastPage = () => setCurrentPage(maxPage)

  const info = {
    currentPage,
    maxPage,
    hasNextPage,
    hasPrevPage,
    hasFirstPage,
    hasLastPage,
  }
  const start = (currentPage - 1) * pageSize
  const finish = (currentPage * pageSize)
  const shownElements = arr.slice(start, finish)

  return {shownElements, nextPage, prevPage, pageJump, firstPage, lastPage, info}
}
