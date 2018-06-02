const path = require('path')
const postSlugFrom = require('./src/utils/postSlug').postSlugFrom
const moment = require('moment')

const templatePath = (dir, template) => {
  return path.resolve('src', 'templates', dir, template + '.js')
}

const BUILD_DATE = moment().format()
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query {
          contentfulSiteData(current: { eq: "CURRENT" }) {
            pages {
              slug
              contentful_id
              layout {
                template
              }
            }
          }
          allContentfulPost(
            filter: { publishOn: { ne: null } }
            sort: { fields: [publishOn], order: DESC }
          ) {
            posts: edges {
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
      `)
        .then(({ errors, data }) => {
          if (errors) {
            reject(errors)
          }

          const pages = data.contentfulSiteData.pages
            .filter(page => page.layout.template !== 'Special')
            .map(page => {
              return {
                slug: page.slug.replace(/[^a-zA-Z0-9-_]/g, ''),
                contentful_id: page.contentful_id,
                template: templatePath('pages', page.layout.template),
              }
            })

          const posts = data.allContentfulPost.posts
            .filter(({ post }) => post.dateTime <= BUILD_DATE)
            .map(({ post }) => {
              return {
                slug: post.slug.replace(/[^a-zA-Z0-9-_]/g, ''),
                contentful_id: post.contentful_id,
                publishDate: post.publishDate,
                dateTime: post.dateTime,
                template: templatePath('posts', post.layout.template),
                path: postSlugFrom(post.slug, post.dateTime),
              }
            })

          return { pages, posts }
        })
        .then(result => {
          result.pages.forEach(page => {
            console.log(page)
            createPage({
              path: page.slug,
              component: page.template,
              context: {
                contentful_id: page.contentful_id,
              },
            })
          })
          return result
        })
        .then(result => {
          console.log(result)
          result.posts.forEach(post => {
            createPage({
              path: post.path,
              component: post.template,
              context: {
                contentful_id: post.contentful_id,
              },
            })
          })

          return result
        })
      //   //
      //   // // TODO Write Blog indices for
      //   // // blog/all.html  // Master List
      //   // // blog/<year>/index.html // Whole Year
      //   // // blog/<year>/<month>/<day>/index.html
      //   // // index.rss
      //   // // blog/index.rss
      //   // posts/index.rss
      //
      //   return result
      // })
    )
  })
}
