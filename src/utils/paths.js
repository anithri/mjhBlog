const templatePath = (template) => `./src/templates/${template}.js`
const byDate = ({ year, month, day, slug }) => `/blog/${year}/${month}/${day}/${slug}.html`
const blogIndexPath = (idx) => `/blog/${idx}.html`
module.exports = {
  templatePath,
  byDate,
  blogIndexPath
}
