import React from 'react'
import Helmet from 'react-helmet'
import Quote from '../../components/Quote'
import PropTypes from 'prop-types'
import pageContainer, { contentfulPageShape } from '../../containers/page'

const PageQuote = ({ data: { contentfulPage } }) => {
  const page = pageContainer(contentfulPage)
  return (
    <Quote subject={page} className={`pageQuote ${theme}`}>
      <Helmet title={page.title} />
    </Quote>
  )
}

PageQuote.propTypes = {
  data: PropTypes.shape({
    contentfulPage: contentfulPageShape,
  }),
}

export default PageQuote

export const PageQuoteQuery = graphql`
  query PageQuoteQuery($contentful_id: String!) {
    contentfulPage(contentful_id: { eq: $contentful_id }) {
      ...commonPageFragment
    }
  }
`
