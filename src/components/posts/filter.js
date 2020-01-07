import moment from 'moment'

const postsByMonth = posts =>
  posts.reduce((byMonth, post) => {
    byMonth[post.key] = byMonth[post.key] || []
    byMonth[post.key].push(post)

    return byMonth
  }, {})

const postsByYear = posts =>
  posts.reduce((byYear, post) => {
    byYear[post.year] = byYear[post.year] || []
    byYear[post.year].push(post)

    return byYear
  }, {})

const checkVisMonth = (container, year, month ) => (
  checkYear,
  checkMonth
) => {
  const key = month && checkMonth ? `${checkYear} ${checkMonth}` : checkYear
  if (!container[key]) return 'empty'
  if (checkMonth === month) return 'selected'
  return 'visible'
}
const checkVisYear = (container, year) => (checkYear) => {
  if (!container[year]) return 'empty'
  if (year === checkYear) return 'selected'
  return 'visible'
}

const recentVis = (check = false) => check ? 'hidden' : 'visible'

export const filterInit = ({ posts, ...initialState }) => ({
  year: false,
  month: false,
  months: moment.months(),
  years: Array.from(new Set([moment().year(),...posts.map(({ year }) => year)])).sort(),
  ...initialState,
  posts: posts.sort((a, b) => a.publishDate > b.publishDate),
  recentCounts: [5, 10, 20],
  recentCount: 5,
  currentPosts: posts,
  byMonth: postsByMonth(posts),
  byYear: postsByYear(posts),
  checkVis: recentVis,
  title: 'Recent 5'
})

export const filterReducer = (state, { type, ...action }) => {
  let key, count
  switch (type) {
    case 'showRecent':
      count = action.recentCount || state.recentCount || 5
      return {
        ...state,
        month: false,
        year: false,
        recentCount: count,
        currentPosts: state.posts.slice(count),
        checkVis: recentVis,
        title: `Recent ${count}`
      }
      break
    case 'changeYear':
      key = state.year
      return {
        ...state,
        year: action.year,
        month: false,
        recentCount: false,
        currentPosts: (state.byYear[key] || []).slice(0,5) || [],
        checkVis: checkVisYear(state.byYear, action.year),
        title: key,
      }
      break
    case 'changeMonth':
      key = `${state.year} ${action.month}`
      return {
        ...state,
        month: action.month,
        recentCount: false,
        currentPosts: state.byMonth[key] || [],
        checkVis: checkVisMonth(state.byMonth, state.year, action.month),
        title: key
      }
      break
    default:
      throw new Error()
  }
}
