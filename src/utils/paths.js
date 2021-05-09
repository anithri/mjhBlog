const templatePath = (template) => `./src/templates/${template}.js`
const byDate = ({ year, month, day, slug }) => `/blog/${year}/${month}/${day}/${slug}.html`
const blogIndexPath = (idx) => `/blog/${idx}.html`

const allBlogIndex = (max) => Array.from(Array(max))  .reduce((hsh, elem, idx) => {    hsh[`Page ${idx + 1}`] = blogIndexPath(idx + 1) ;   return hsh  }, {})


module.exports = {
  templatePath,
  byDate,
  blogIndexPath,
  allBlogIndex
}
