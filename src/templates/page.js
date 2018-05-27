import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

const normalizeResponse = ({
  title,
  slug,
  body: {
    childMarkdownRemark: { html: body },
  },
  theme: { skin: theme },
}) => {
  return { title, slug, body, theme }
}

const IndexPage = ({ data: { contentfulPage: page } }) => {
  const {
    title,
    slug,
    body: {
      childMarkdownRemark: { html: body },
    },
    theme: { skin },
  } = page
  return (
    <article className={`pageArticle ${skin} ${slug}Slug`}>
      <h2>{title}</h2>
      <section dangerouslySetInnerHTML={{ __html: body }} />
      {/*<Img resolutions={node.featuredImage.resolutions}/>*/}
    </article>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query PageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      slug
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      theme {
        skin
      }
    }
  }
`
