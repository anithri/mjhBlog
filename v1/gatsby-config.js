// const Slug = require('./src/utils/Slug')
// const moment = require('moment')
// module.exports = {
//   siteMetadata: {
//     title: 'Believing the Bird',
//     homeUrl: '/',
//     host: 'localhost:8000',
//     siteUrl: 'https://believingthebird.com',
//     description: 'Writings of Jeanne Horvath'
//   },
//   plugins: [
//     'gatsby-plugin-react-helmet',
//     'gatsby-plugin-react-next',
//     {
//       resolve: `gatsby-source-contentful`,
//       options: {
//         spaceId: process.env.MOM_SPACE_ID,
//         accessToken: process.env.MOM_ACCESS_TOKEN,
//       },
//     },
//     {
//       resolve: 'gatsby-plugin-typography',
//       options: {
//         pathToConfigModule: 'src/styles/typography',
//       },
//     },
//     'gatsby-transformer-remark',
//     {
//       resolve: 'gatsby-plugin-feed',
//       options: {
//         query: `
//           {
//             site {
//               siteMetadata {
//                 title
//                 description
//                 siteUrl
//               }
//             }
//           }
//         `,
//         feeds: [
//           {
//             output: '/rss.xml',
//             title: 'Believing the Bird',
//             serialize: ({query: {site, posts}}) => {
//               return posts.all.map(({post}) => {
//                 const date = moment(post.publishOn)
//                 const url = site.siteMetadata.siteUrl
//                 return {
//                   title: post.title,
//                   date: date,
//                   description: post.summary,
//                   url: url + Slug.post(post.slug, date),
//                   guid: url + Slug.post(post.slug, date),
//                   custom_elements: [
//                     { "content:encoded": post.body.text }
//                   ]
//                 }
//               })
//             },
//             query: `
//               {
//                 posts: allContentfulPost(
//                   sort: { fields: [publishOn], order: DESC}
//                   filter: { publishOn: { ne: null } }
//                 ) {
//                   all: edges {
//                     post: node {
//                       title
//                       slug
//                       publishOn
//                       summary
//                       body {
//                         text: childMarkdownRemark {
//                           excerpt
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             `
//           }
//         ]
//       }
//     }
//     // {
//     //   resolve: `gatsby-plugin-postcss-sass`,
//     //   options: {
//     //     postCssPlugins: [
//     //       require('postcss-cssnext')(),
//     //       require('postcss-nesting')()
//     //     ]
//     //   },
//     // },
//   ],
// }
