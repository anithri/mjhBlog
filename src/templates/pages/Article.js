import React from 'react'
import Helmet from 'react-helmet'
import Article from '../../components/Article'
import PropTypes from 'prop-types'
import pageContainer, {contentfulPageShape} from '../../containers/page';

const PageArticle = ({ data: { contentfulPage } }) => {
  const page = pageContainer(contentfulPage)
  return (
    <Article subject={page} className={`pageArticle ${page.theme} ${page.slug}Page`}>
      <Helmet title={page.title} />
    </Article>
  )
}

PageArticle.propTypes = {
  data: PropTypes.shape({
    contentfulPage: contentfulPageShape.required
  })
}

export default PageArticle

export const PageArticleQuery = graphql`
  query PageArticleQuery($contentful_id: String!) {
    contentfulPage(contentful_id: { eq: $contentful_id }) {
      ...commonPageFragment
    }
  }
`
