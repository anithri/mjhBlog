const path = require('path')
const postSlugFrom = require('./src/utils/postSlug').postSlugFrom
const moment = require('moment')

const BUILD_DATE = moment()
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query {
          allContentfulPage (filter: {layout: {template: {ne: "special"}} }){
            allPages: edges {
              page: node {
                slug
                layout {
                  template
                }
              }
            }
          }
          allContentfulPost(
              filter: {publishOn: {ne: null}}
              sort: {fields: [publishOn], order: DESC}
            ) {
            allPosts: edges {
              post: node {
                slug
                contentful_id
                publishDate: publishOn(formatString: "LL")
                dateTime: publishOn(formatString: "YYYY-MM-DD")
                layout {
                  template
                }
              }
            }
          }
        }
      `).then((result) =>{
        if (result.errors) {
          reject(result.errors)
        }
        return {
          pages: result.data.allContentfulPage.allPages.map(({page}) => page),
          posts: result.data.allContentfulPost.allPosts.map(({post}) => post),
        }
      }).then((result) => {
        result.pages.forEach((page) => {

          const { slug, layout: { template } } = page
          const pageTemplate = path.resolve('src/templates/pages', `${template}.js`)

          // path: /blog/index.html
          createPage({
            path: slug,
            component: pageTemplate,
            context: {
              slug: slug,
            },
          })

          // path: /blog.html
          createPage({
            path: slug + '.html',
            component: pageTemplate,
            context: {
              slug: slug,
            },
          })
        })
        return result
      }).then((result) => {
        result.posts.forEach((post) => {
          const { contentful_id, slug, dateTime, layout: { template } } = post

          // Do not build posts from the future
          // TODO find a way to schedule rebuilds
          if (dateTime > BUILD_DATE) return

          const pageTemplate = path.resolve('src/templates/posts', `${template}.js`)
          createPage({
            path: postSlugFrom(slug, dateTime),
            component: pageTemplate,
            context: {
              contentful_id: contentful_id,
            },
          })
        })
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
