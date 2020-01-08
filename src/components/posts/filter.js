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

const yearsFor = posts =>
  Array(1 + moment().year() - parseInt(posts[posts.length - 1].year))
    .fill(0)
    .map((_, idx) => (idx + parseInt(posts[posts.length - 1].year)).toString())

export const filterInit = ({ posts, ...initialState }) => {
  const state = {
    months: moment.months(),
    years: yearsFor(posts),
    key: posts[0].key,
    ...initialState,

    posts: posts.sort((a, b) => a.publishDate > b.publishDate),
    byMonth: postsByMonth(posts),
    byYear: postsByYear(posts),
  }
  state.year = posts[0].year
  state.month = posts[0].month
  state.currentPosts = state.byMonth[state.key] || []
  // [...] nil
  // !([..])/true && ([..]).length > 0
  state.monthVisibility = monthVisibility(state)

  return state
}
const exists = (currentPosts) => currentPosts && Array.isArray(currentPosts) && currentPosts.length > 0

export const monthVisibility = state => filterMonth => {
  const { byMonth, month, year } = state
  if (!byMonth[`${year} ${filterMonth}`]) return 'dim'
  if (!byMonth[`${year} ${filterMonth}`].length) return 'dim'
  if (filterMonth === month) return 'selected'
  return 'visible'
}

export const filterReducer = (state, { type, ...action }) => {
  switch (type) {
    case 'setFilter':
      const newState = {
        ...state,
        ...action
      }
      newState.key = `${newState.year} ${newState.month}`
      newState.title = newState.key
      newState.currentPosts = newState.byMonth[newState.key] || []
      newState.monthVisibility = monthVisibility(newState)
      return newState
      break
    case 'shutUpEslint':
      /* noop */
      break
    default:
      throw new Error()
  }
  let key, newState
}
