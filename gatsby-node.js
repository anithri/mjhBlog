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
  const blogTemplate = path.resolve('./src/templates/BlogEntry.js')

  const result = await graphql(
    `
      query allPostSlugsQuery {
        allContentfulPost {
          edges {
            node {
              id
              slug
              year: publishOn(formatString: "YYYY")
              month: publishOn(formatString: "MM")
              day: publishOn(formatString: "DD")
            }
          }
        }
      }
    `
  )
  console.log(result)

  if (result.errors) {
    reporter.panicOnBuild('There was an error loading blog posts', result.errors)
    return
  }

  const posts = result.data.allContentfulPost.edges.map(({ node }) => node)
  console.log('Posts', posts)

  posts.forEach((post, idx) => {

    const prevId = idx === 0 ? null : posts[idx - 1].id
    const nextId = (idx === posts.length - 1) ? null : posts[idx + 1].id
    const blogPath = mkBlogEntry(post)
    createPage({
      path: blogPath, component: blogTemplate, context: { id: post.id, prevId, nextId }
    })
  })
}
