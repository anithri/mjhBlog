const postSlugFrom = (slug, dateTime, root = '') => {
  console.log('postSlugForm', slug, dateTime, root)
  const [year, month, day] = dateTime.split('-')
  return `${root}posts/${year}/${month}/${day}/${slug}.html`
}

module.exports = {
  postSlugFrom,
}
