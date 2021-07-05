const templatePath = (template) => `./src/templates/${template}.js`
const byDate = ({ year, month, day, slug }) => `/blog/${year}/${month}/${day}/${slug}.html`
const blogIndexPath = (idx) => `/blog/${idx}.html`

const allBlogIndex = (max) => Array.from(Array(max)).reduce((hsh, elem, idx) => {
  hsh[`Page ${idx + 1}`] = blogIndexPath(idx + 1)
  return hsh
}, {})

const getMonth = (idx) => {
  var objDate = new Date()
  objDate.setDate(1)
  objDate.setMonth(idx - 1)

  var locale = 'en-us',
    month = objDate.toLocaleString(locale, { month: 'long' })

  return month
}

const calendarGroups = (all) => all.reduce((group, elem) => {
  console.log(elem)
  let path = `${elem.year}/index.html`
  group[path] = group[path] || {
    title: elem.year,
    list: [] }
  group[path].list.push(elem)

  path = `${elem.year}/${elem.month}/index.html`
  group[path] = group[path] || {
    title: `${getMonth(elem.month)} ${elem.year}`,
    list: [] }
  group[path].list.push(elem)

  path = `${elem.year}/${elem.month}/${elem.day}/index.html`
  group[path] = group[path] || {
    title: `${getMonth(elem.month)} ${elem.day}, ${elem.year}`,
    list: []
  }
  group[path].list.push(elem)

  return group
}, {})

module.exports = {
  templatePath,
  byDate,
  blogIndexPath,
  allBlogIndex,
  calendarGroups
}

