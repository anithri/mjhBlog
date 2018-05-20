module.exports = {
  siteMetadata: {
    title: 'Believing the Bird',
    homeUrl: '/',
    host: 'localhost:8000'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.MOM_SPACE_ID,
        accessToken: process.env.MOM_ACCESS_TOKEN,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          require('postcss-cssnext')
        ]
      },
    },
  ],
}
