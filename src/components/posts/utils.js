const moment = require('moment')
const year = moment().year()
export const createCategoryContainer = years =>
  years.reduce(
    (hsh, year) => {
      hsh[year] = moment.months().reduce(
        function(selections, month, idx) {
          selections[year] = selections[year] || {}
          selections[year][month] = { year, month, posts: [] }
          return selections
        },
        { All: [] }
      )
      return hsh
    },
    { All: [] }
  )

export const categorizePosts = posts => {
  const years = Array(1 + year - 2018)
    .fill('')
    .map((_, idx) => (idx + 2018).toString())

  const result = {
    years,
    months: moment.months(),
    categorized: createCategoryContainer(years),
  }

  posts.forEach(post => {
    result.categorized.All.push(post)
    result.categorized[post.year] = result.categorized[post.year] || {All: []}
    result.categorized[post.year].All.push(post)
    result.categorized[post.year][post.month] = result.categorized[post.year][post.month] || []
    result.categorized[post.year][post.month].push(post)
  })

  return result
}
