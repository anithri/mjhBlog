
const mkBlogEntry = post => {
  const {year, month, day, slug} = post
  return `/${year}/${month}/${day}/${slug}.html`
}

module.exports = {
  mkBlogEntry
}
