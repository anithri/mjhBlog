const Slug = require('./src/utils/Slug')
const path = require('path')
const moment = require('moment')
// const _groupBy = require('lodash/groupBy')
const templatePath = (dir, template) => {
  return path.resolve('src', 'templates', dir, template + '.js')
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      siteData: contentfulSiteData(current: { eq: "CURRENT" }) {
        pages {
          contentful_id
          layout
          slug
        }
      }
      allPosts: allContentfulPost(
        filter: { publishOn: { ne: null } }
        sort: { fields: [publishOn], order: DESC }
      ) {
        posts: edges {
          next {
            contentful_id
            slug
            publishOn
          }
          prev: previous {
            contentful_id
            slug
            publishOn
          }
          post: node {
            contentful_id
            layout
            publishOn
            slug
          }
        }
      }
    }
  `)
    .then(({ errors, data }) => {
      if (errors) {
        errors.forEach(e => console.error(e.toString()))
        return Promise.reject(errors)
      }

      const pages = data.siteData.pages
        .filter(page => page.layout !== 'Special')
        .map(page => ({
          contentful_id: page.contentful_id,
          slug: Slug.page(page.slug),
          slugHtml: Slug.page(page.slug, 'html'),
          template: templatePath('pages', page.layout)
        }))

      const posts = data.allPosts.posts.map(({ prev, post, next }) => {
        const dateStamp = moment(post.publishOn)
        return {
          contentful_id: post.contentful_id,
          dateStamp: dateStamp,
          path: Slug.post(post.slug, dateStamp),
          slug: Slug.post(post.slug, dateStamp),
          template: templatePath('posts', post.layout),

          prev_post_id: next && next.contentful_id
        }
      })

      return { pages, posts }
    }) /* parse data */
    .then(result => {
      // create pages for siteData.pages
      result.pages.forEach(page => {
        createPage({
          // page slug set in md frontmatter
          path: page.slug,
          component: page.template,
          // additional data can be passed via context
          context: { contentful_id: page.contentful_id }
        })
        createPage({
          // page slug set in md frontmatter
          path: page.slugHtml,
          component: page.template,
          // additional data can be passed via context
          context: { contentful_id: page.contentful_id }
        })
      })
      return result
    }) /* create pages */
    // .then(result => {
    //   // generate posts
    //   result.posts.forEach(post => {
    //     createPage({
    //       path: post.path,
    //       component: post.template,
    //       context: {
    //         contentful_id: page.contentful_id,
    //         next_post_id: post.next_post_id,
    //         prev_post_id: post.prev_post_id
    //       }
    //     })
    //   })
    //   return result
    // }) /* create posts */
  // .then(result => {
  //   const byDate = {
  //     ..._groupBy(result.posts, p => p.dateStamp.year()),
  //     ..._groupBy(result.posts, p => p.dateStamp.format('YYYY-MM')),
  //   }
  //   Object.entries(byDate).forEach(([group, posts]) => {
  //     createPage({
  //       path: Slug.post('index', moment(group)),
  //       component: post.template,
  //       context: {
  //         contentful_id: post.contentful_id,
  //       },
  //     })
  //   })
  //
  //   return result
  // }) // generate post indicies
}
// // Random fix for https://github.com/gatsbyjs/gatsby/issues/5700
// exports.resolvableExtensions = () => ['.json']
