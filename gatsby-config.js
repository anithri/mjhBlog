module.exports = {
  siteMetadata: {
    title: 'Believing the Bird',
    description: 'Birdies Blog',
    author: 'M Jeanne Horvath',
    designer: 'Designed by Scott M Parrish with open source software',
    established: 2017
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/styles/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-typescript'
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          'components': './components',
          'data': './data',
          'images': './images',
          'styles': './styles',
          'utils': './utils',
          static: {
            root: './public',
            alias: './static'
          }
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Starter',
        short_name: 'Gatsby Starter',
        start_url: '/',
        background_color: 'black',
        theme_color: 'black',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('postcss-preset-env')({ stage: 0 })]
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENV,
        pageLimit: 50
      }
    }
  ]
}
