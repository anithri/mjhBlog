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
  Array(moment().year() - parseInt(posts[posts.length - 1].year))
    .fill(0)
    .map((_, idx) => (idx + parseInt(posts[posts.length - 1].year)).toString())


export const filterInit = ({ posts, ...initialState }) => ({
  year: false,
  month: false,
  months: moment.months(),
  years: yearsFor(posts),
  recentCounts: [5, 10, 20],
  recentCount: 5,
  title: 'Recent 5',
  ...initialState,

  posts: posts.sort((a, b) => a.publishDate > b.publishDate),
  currentPosts: posts.slice(0, 5),
  byMonth: postsByMonth(posts),
  byYear: postsByYear(posts),
  monthVisibility: (month) => 'hidden'
})

export const monthVisibility = (state) => (filterMonth) => {
  const {byMonth, month, year} = state
  console.log(byMonth, month, year, filterMonth)

  if (!year) return 'hidden'
  if (!byMonth[`${year} ${month}`]) return 'dim'
  if (!byMonth[`${year} ${month}`].length) return 'dim'
  if (filterMonth === month) return 'selected'
  return 'visible'
}

export const filterReducer = (state, { type, ...action }) => {
  let key, count, newState
  switch (type) {
    case 'showRecent':
      count = action.recentCount || state.recentCount || 5
      newState =  {
        ...state,
        month: false,
        year: false,
        recentCount: count,
        currentPosts: state.posts.slice(0, count),
        title: `Recent ${count}`,
        monthVisibility: () => 'hidden',
      }
      return newState
      break
    case 'changeYear':
      newState = {
        ...state,
        year: action.year,
        month: state.month || 'January',
        recentCount: false,
        currentPosts: (state.byYear[state.year] || []).slice(0, 5) || [],
        title: state.year,
      }

      newState.monthVisibility = monthVisibility(newState)
      return newState
      break
    case 'changeMonth':
      key = `${state.year} ${action.month}`
      newState = {
        ...state,
        month: action.month,
        recentCount: false,
        currentPosts: state.byMonth[key] || [],
        title: key,
        monthVisibility: monthVisibility(state),
      }

      newState.monthVisibility = monthVisibility(newState)
      return newState
      break
    default:
      throw new Error()
  }
}
