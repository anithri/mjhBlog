import React from 'react'
import Helmet from 'react-helmet'
import Quote from '../../components/Quote'
import pageContainer, {contentfulPageShape} from '../../containers/page'

const PageQuote = ({data: {contentfulPage}}) => {
  const page = pageContainer(contentfulPage)
  return (
    <Quote subject={page} className={`pageQuote ${skin}`}>
      <Helmet title={page.title} />
    </Quote>
  )
}

PageQuote.propTypes = {
  data: {
    contentfulPage: contentfulPageShape
  }
}

export default PageQuote

export const PageQuoteQuery = graphql`
  query PageQuoteQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      ...commonPostProps
    }
  }
`
