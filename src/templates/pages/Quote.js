import React from 'react'
import Helmet from 'react-helmet'
import Quote from '../../components/Quote'
import { useStaticQuery } from 'gatsby'

const PageQuote = ({ contentful_id }) => {
  const { page } = useStaticQuery(graphql`
    query PageQuoteQuery($contentful_id: String!) {
      page: contentfulPage(contentful_id: { eq: $contentful_id }) {
        body {
          childMarkdownRemark {
            html
          }
        }
        images {
          title
          fluid(maxWidth: 1280) {
            ...GatsbyContentfulFluid_noBase64
          }
        }
        slug
        theme
        title
      }
    }
  `)

  return (
    <Quote subject={page} className={`pageQuote ${theme}`}>
      <Helmet title={page.title} />
    </Quote>
  )
}

export default PageQuote
