const {templatePath, byDate, calendarGroups, artworkPath} = require('./src/utils/paths')
const path = require('path')

const PER_PAGE = 5

const templates = {
  blog: path.resolve(templatePath('BlogEntry')),
  herbs: path.resolve(templatePath('Herbs')),
  joeArtwork: path.resolve(templatePath('JoeSingleArtwork')),
  blogIndex: path.resolve(templatePath('BlogIndex'))
}

exports.onCreateWebpackConfig = ({getConfig, stage}) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}

exports.createPages = async ({graphql, actions, reporter}) => {
  const path = require('path')
  const {mkBlogEntry} = require('./src/utils/mkBlogEntry')
  const {createPage} = actions

  return graphql(
      `
      query allPostSlugsQuery {
        posts: allContentfulPost {
          edges {
            prev: previous {
              id
            }
            next {
              id
            }
            post: node {
              id
              slug
              year: publishOn(formatString: "YYYY")
              month: publishOn(formatString: "MM")
              day: publishOn(formatString: "DD")
            }
          }
        }
        herbs: allContentfulArtwork(
              sort: {fields: publishOn, order: DESC}
              filter: {collection: {eq: "Herbs"}}
            ) {
              edges {
                prev: previous {
                  slug
                  collection
                  title
                }
                next {
                  slug
                  collection
                  title 
                }
                herb: node {
                  id
                  collection
                  slug
                }
              }
            }
        dandelions: allContentfulArtwork(
              sort: {fields: publishOn, order: DESC}
              filter: {collection: {eq: "Project Dandelion"}}
            ) {
              edges {
                prev: previous {
                  collection
                  slug
                  title
                }
                next {
                  collection
                  slug
                  title 
                }
                dandelion: node {
                  id
                  collection
                  slug
                }
              }
            }
        artworks: allContentfulArtwork(
              sort: {fields: publishOn, order: DESC}
              filter: {collection: {eq: "Art"}}
            ) {
              edges {
                prev: previous {
                  slug
                  collection
                  title
                }
                next {
                  slug
                  collection
                  title 
                }
                art: node {
                  id
                  collection
                  slug
                }
              }
            }
        joeArtworks: allContentfulArtwork(
              sort: {fields: [displayOrder,title], order: ASC}
              filter: {collection: {eq: "Joe Horvath"}}
            ) {
              edges {
                prev: previous {
                  slug
                  collection
                  title
                }
                next {
                  slug
                  collection
                  title 
                }
                art: node {
                  id
                  collection
                  slug
                }
              }
            }
      }
    `
  ).then(({data}) => ({
    posts: data.posts.edges,
    herbs: data.herbs.edges,
    dandelions: data.dandelions.edges,
    artworks: data.artworks.edges,
    errors: data.errors,
    joeArtworks: data.joeArtworks.edges
  })).then(data => {
    if (data.errors) {
      reporter.panicOnBuild('There was an error loading blog posts', data.errors)
      throw new Error(data.errors)
    }
    return data
  }).then(data => { // create blog index pages
    const grouped = calendarGroups(data.posts.map(({post}) => post))
    Object.entries(grouped).forEach(([path, group]) => {
      createPage({
        path: path,
        component: templates.blogIndex,
        context: {
          title: group.title,
          postIds: group.list.map(({id}) => id)
        }
      })
    })
    return data
  }).then(data => {  // create blog entries
    data.posts.forEach(post => {
      createPage({
        path: byDate(post.post),
        component: templates.blog,
        context: {
          id: post.post.id,
          prevId: post.prev && post.prev.id,
          nextId: post.next && post.next.id
        }
      })
    })
    return data
  }).then(data => { // generate herb pages
    data.herbs.forEach(({herb, next, prev}) => {
      if (next) next.path = artworkPath(next)
      if (prev) prev.path = artworkPath(prev)
      herb.path = artworkPath(herb)
      createPage({
        path: herb.path,
        component: templates.herbs,
        context: {
          id: herb.id,
          all: {path: '/herbs'},
          next,
          prev
        }
      })
    })

    return data
  }).then(data => { // generate dandelion pages
    data.dandelions.forEach(({dandelion, next, prev}) => {
      if (next) next.path = artworkPath(next)
      if (prev) prev.path = artworkPath(prev)
      dandelion.path = artworkPath(dandelion)
      createPage({
        path: dandelion.path,
        component: templates.herbs,
        context: {
          id: dandelion.id,
          all: {path: '/project-dandelion'},
          next,
          prev
        }
      })
    })

    return data
  }).then(data => { // generate art pages
    data.artworks.forEach(({art, next, prev}) => {
      if (next) next.path = artworkPath(next)
      if (prev) prev.path = artworkPath(prev)
      art.path = artworkPath(art)
      createPage({
        path: art.path,
        component: templates.herbs,
        context: {
          id: art.id,
          all: {path: '/art'},
          next,
          prev
        }
      })
    })
    return data
  }).then(data => { // generate art pages
    data.joeArtworks.forEach(({art, next, prev}) => {
      if (next) next.path = artworkPath(next)
      if (prev) prev.path = artworkPath(prev)
      art.path = artworkPath(art)
      createPage({
        path: art.path,
        component: templates.joeArtwork,
        context: {
          id: art.id,
          all: {path: '/joe-horvath'},
          next,
          prev
        }
      })
    })
    const {art, next = {}} = data.joeArtworks[0]
    if (next) next.path = artworkPath(next)
    art.path = '/joe-horvath/index.html'
    createPage({
      path: art.path,
      component: templates.joeArtwork,
      context: {
        id: art.id,
        all: {path: '/joe-horvath'},
        next
      }
    })
    return data
  })

}
