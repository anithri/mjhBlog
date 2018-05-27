import React from 'react'
import Helmet from 'react-helmet'
import Article from '../../components/Article'
import pageContainer, {contentfulPageShape} from '../../containers/page';

const PageArticle = ({ data: { contentfulPage } }) => {
  const page = pageContainer(contentfulPage)
  return (
    <Article subject={page} className={`pageArticle ${skin} ${slug}Page`}>
      <Helmet title={page.title} />
    </Article>
  )
}

PageArticle.propTypes = {
  data: {
    contentfulPage: contentfulPageShape.required
  }
}

export default PageArticle

export const PageArticleQuery = graphql`
  query PageArticleQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      ...commonPageProps
    }
  }
`
