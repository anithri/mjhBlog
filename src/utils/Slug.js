const clean = (slug, extension) => {
  return (
    slug.replace(/[^a-zA-Z0-9-_]/g, '') + (extension ? '.' + extension : '')
  )
}

const deep = (before, slug, extension = '', after = []) => {
  return [...before, clean(slug, extension), ...after].join('/')
}

const post = (slug, date) => {
  return deep(['posts', date.year(), date.format('mm')], slug, 'html')
}
const page = (slug, extension = '') => deep([], slug, extension)

module.exports = { clean, page, post }
