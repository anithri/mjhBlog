import { useState } from 'react'
import useArray from 'use-array'

// useArray methods
// {
//   set, empty, replace, push,
//   updateAt, setAt, removeAt,
//   filter, map, sort, reverse,
//   mergeBefore, mergeAfter,
// }

export const usePostList = posts => {
  const [masterList, { filter }] = useArray(
    posts.sort((a, b) => b.publishDate - a.publishDate)
  )
  const recent = (count = recentCount) => filter((post, idx) => idx < recentCount)
  console.log('usePostList', masterList, filter((post, idx) => idx % 6 === 0))
  const [postState, setFilterParams] = useState({
    mode: 'Recent',
    month: 'All',
    year: 'Recent',
    recentCount: 5,
    currentPosts: recent(5),
  })
  const { month, year, recentCount, currentPosts, mode } = postState

  console.log('Filter test', filter)

  const postsFor = (filterWith) => {
    console.log(filterWith)
    const filterYear = filterWith.year || year
    const filterMonth = filterWith.month || month
    const filterMode = filterWith.mode || mode || 'Month'
    const filterRecentCount = filterWith.recentCount || recentCount || 5
    switch (filterMode) {
      case 'Recent':
        return recent(filterRecentCount)
      case 'Year':
        return filter(post => (console.log(post) || post.year === filterYear))
      case 'Month':
        return filter(post => (console.log(post) || post.year === filterMonth && post.month === filterMonth))
      default:
        throw new Error()
    }
    return []
  }

  const setFilter = fresh => {
    const newFilter = { ...postState, ...fresh }
    newFilter.currentPosts = postsFor(newFilter) || []
    setFilterParams(newFilter)
  }

  const isEmptyYear = yearFor => console.log(yearFor, postsFor({ year: yearFor, mode: 'Year' })) ||
    postsFor({ year: yearFor, mode: 'Year' }).length === 0

  const isEmptyMonth = (yearFor, monthFor) =>
    postsFor({ month: monthFor }).length === 0

  const isSelected = args => {
    const postYear = args.year || year
    const postMonth = args.month || month
    const postMode = args.mode || mode || 'Month'

    switch (postMode) {
      case 'Recent':
        return postMode === mode
      case 'Year':
        return postYear === year
      case 'Month':
        return  postMonth === month
      default:
        throw new Error()
    }
  }

  const mkTitle = () => {
    switch (mode) {
      case 'Recent':
        return `Recent ${recentCount}`
      case 'Year':
        return year
      case 'Month':
        return `${year} - ${month}`
      default:
        throw new Error()
    }
  }

  const title = mkTitle()

  return [
    { currentPosts, month, year, title, mode },
    {
      setFilter,
      isSelected,
      isEmptyYear,
      isEmptyMonth
    }
  ]
}
