const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    // const postTemplate = path.resolve('src/templates/post.js')
    resolve(
      graphql(`
        query {
          allContentfulPage {
            edges {
              node {
                slug
                layout {
                  template
                }
                theme {
                  skin
                }
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulPage.edges.forEach((edge) => {
          const {slug, layout: {template}, theme: {skin}} = edge.node
          const pageTemplate = path.resolve('src/templates',`${template}.js`)

          createPage({
            path: slug + '.html',
            component: pageTemplate,
            context: {
              slug: edge.node.slug,
              theme: skin
            },
          })
        })
        return
      }),
    )
  })
}
