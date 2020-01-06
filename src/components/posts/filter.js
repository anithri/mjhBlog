import moment from 'moment'

const postsFor = (posts, year, month) => posts.filter(
  post =>
    year === 'All' ||
    (year === post.year && ['All', post.month].includes(month))
)

const hasPosts = (posts, year, month) => postsFor(posts,year,month).length

export const initializeState = ({ posts, ...initialState }) => ({
  ...initialState,
  year: 'All',
  month: 'All',
  months: moment.months(),
  years: Array.from(new Set(posts.map(({ year }) => year))).sort(),
  posts: posts,
  visiblePosts: postsFor(posts, 'All','All'),
  isSelectedYear: (year) => year === 'All',
  isSelectedMonth: (month) => month === 'All',
  isEmptyYear: (year) => !hasPosts(posts, year, 'All'),
  isEmptyMonth: (month) => !hasPosts(posts, 'All', month),

})

export const reducer = (state, { type, ...action }) => {
  console.log('reducer', type, action)
  switch (type) {
    case 'updateFilter':
      const newState = {
        ...state,
        ...action,
        visiblePosts: postsFor(state.posts, state.year, state.month),
        isSelectedYear: (year) => year === state.year,
        isSelectedMonth: (month) => [state.month,'All'].includes(month),
        isEmptyYear: (year) => !hasPosts(state.posts, year, 'All'),
        isEmptyMonth: (month) => !hasPosts(state.posts, state.year, month),

      }
      if (action.year === 'All') newState.month = 'All'
    default:
      throw new Error()
  }
}

