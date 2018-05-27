import React from 'react'
import Helmet from 'react-helmet'

import Img from 'gatsby-image'

const QuotePage = (props ) => {
  const { data: { contentfulPage: page } } = props
  const {
    title, slug,
    theme: { skin },
    body: { childMarkdownRemark: { html: body } }
  } = page;
  return (
    <article className={`quotePage ${skin} ${slug}Slug`}>
      <section dangerouslySetInnerHTML={{ __html: body }} />
      {/*<Img resolutions={node.featuredImage.resolutions}/>*/}
    </article>
  )
}

export default QuotePage

export const QuotePageQuery = graphql`
  query quotePageQuery($slug: String!) {
    contentfulPage(slug: {eq: $slug}) {
      slug
      title
      body {
        childMarkdownRemark{
          html
        }
      }
      theme {
        skin
      }
    }
  }
`