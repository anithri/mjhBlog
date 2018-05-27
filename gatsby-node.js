const path = require('path')
const postSlugFrom = require('./src/utils/postSlug').postSlugFrom

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    // const postTemplate = path.resolve('src/templates/post.js')
    resolve(
      graphql(`
          query {
            allContentfulPage (filter: {layout: {template: {ne: "special"}} }){
              edges {
                node {
                  slug
                  layout {
                    template
                  }
                }
              }
            }
#            allContentfulPost(
#                filter: {publishOn: {ne: null}}
#                order: {fields: [publishOn], order: DESC}
#              ) {
#              edges {
#                node {
#                  slug
#                  publishDate: publishOn(formatDateString: "LL")
#                  dateTime: publishOn(formatString: "YYYY-MM-DD")
#                  layout {
#                    template
#                  }
#                }
#              }
#            }
          }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulPage.edges.forEach(({ node }) => {

          const { slug, layout: { template } } = node
          const pageTemplate = path.resolve('src/templates', `${template}.js`)


          //   // path: /blog/index.html
          //   createPage({
          //     path: slug,
          //     component: pageTemplate,
          //     context: {
          //       slug: node.slug,
          //     },
          //   })
          //
          //   // path: /blog.html
          //   createPage({
          //     path: slug + '.html',
          //     component: pageTemplate,
          //     context: {
          //       slug: node.slug,
          //     },
          //   })
        })

        // result.data.allContentfulPost.edges.forEach((edge) => {
        //   const { slug, dateTime, layout: { template } } = edge.node
        //
        //   const pageTemplate = path.resolve('src/templates', `${template}.js`)
        //   createPage({
        //     path: postSlugFrom(slug, dateTime),
        //     component: pageTemplate,
        //     context: {
        //       slug: slug,
        //     },
        //   })
        // })
        //
        // // TODO Write Blog indices for
        // // blog/all.html  // Master List
        // // blog/<year>/index.html // Whole Year
        // // blog/<year>/<month>/<day>/index.html
        // // index.rss
        // // blog/index.rss
        // posts/index.rss

        return
      }),
    )
  })
}
