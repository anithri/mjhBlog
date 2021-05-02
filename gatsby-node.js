const { templatePath, byDate, blogIndexPath } = require('./src/utils/paths')
const path = require('path')

const PER_PAGE = 5

const templates = {
  blog: path.resolve(templatePath('BlogEntry')),
  herbs: path.resolve(templatePath('Herbs')),
  blogIndex: path.resolve(templatePath('BlogIndex'))
}

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const path = require('path')
  const { mkBlogEntry } = require('./src/utils/mkBlogEntry')
  const { createPage } = actions

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
                }
                next {
                  slug 
                }
                node {
                  slug
                }
              }
            }
      }
    `
  ).then(({ data }) => ({
    posts: data.posts.edges,
    herbs: data.herbs.edges,
    errors: data.errors
  })).then(data => {
    if (data.errors) {
      reporter.panicOnBuild('There was an error loading blog posts', data.errors)
      throw new Error(data.errors)
    }
    return data
  }).then(data => {
    const lastPage = Math.floor(data.posts.length / PER_PAGE) + 1
    for (let i = 1; i <= lastPage; i++) {
      createPage({
        path: blogIndexPath(i),
        component: templates.blogIndex,
        context: {
          prevPage: i == 1 ? null : blogIndexPath(i - 1),
          nextPage: i == lastPage ? null : blogIndexPath(i + 1),
          currentPage: i,
          skip: (i - 1) * PER_PAGE,
          limit: PER_PAGE
        }
      })
    }
    return data
  }).then(data => {
    data.posts.forEach((post, idx) => {
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
  })
}
