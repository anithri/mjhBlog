const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('src/templates/page.js')
    // const postTemplate = path.resolve('src/templates/post.js')
    resolve(
      graphql(`
        query {
          allContentfulPage {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulPage.edges.forEach((edge) => {
          createPage({
            path: edge.node.slug + '.html',
            component: pageTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
        return
      }),
    )
  })
}


