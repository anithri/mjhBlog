import 'react'
import PropTypes from 'prop-types'

export const pageShape = PropTypes.shape({
  body: PropTypes.string,
  slug: PropTypes.string.isRequired,
  theme: PropTypes.string,
  title: PropTypes.string.isRequired,
})

export const contentfulPageShape = PropTypes.shape({
  body: {
    childMarkdownRemark: {
      html: PropTypes.string.isRequired
    }
  },
  slug: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
})

const pageContainer = (page) => {
  console.log(page.images)

  const body = page.body.childMarkdownRemark.html
  return {
    ...page,
    body,
  }
}

export const commonPageFragment = graphql`
  fragment commonPageFragment on ContentfulPage {
    body {
      childMarkdownRemark {
        html
      }
    }
    images {
      title
      sizes(maxWidth: 1280) {
        ...GatsbyContentfulSizes
      }
    }
    
    slug
    theme
    title
  }
`


export default pageContainer