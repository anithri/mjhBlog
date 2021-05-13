import { useState } from 'react'

export const useArrayPagination = (arr, idx = 1, pageSize = 5) => {
  const [currentPage, setCurrentPage] = useState(idx)
  const maxPage = Math.ceil(arr.length / pageSize)
  const nextPage = () => setCurrentPage(pn => Math.min(pn + 1, maxPage))
  const prevPage = () => setCurrentPage(pn => Math.max(pn - 1, 1))
  const pageJump = (page) => setCurrentPage(() => page)
  const hasNextPage = () => currentPage + 1 < maxPage
  const hasPrevPage = () => currentPage > 1
  const info = {
    currentPage,
    maxPage,
    hasNextPage,
    hasPrevPage
  }
  const start = (currentPage - 1) * pageSize
  const finish = (currentPage * pageSize)
  const shownPosts = arr.slice(start, finish)

  return [shownPosts, nextPage, prevPage, pageJump, info]
}
