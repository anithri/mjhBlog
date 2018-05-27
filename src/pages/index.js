import React from 'react'
import Helmet from 'react-helmet'
import Quote from '../components/Quote'
import pageContainer, {contentfulPageShape} from '../containers/page'

const HomePage = ({data: contentfulPage}) => {
  const page = pageContainer(contentfulPage)

  return (
    <Quote className={`homePage ${page.skin}`} subject={page}>
      <Helmet title={page.title} />
    </Quote>
  )
}

HomePage.propTypes = {
  data: {
    contentfulPage: contentfulPageShape
  }
}

export default HomePage

export const HomePageQuery = graphql`
  query homePageQuery {
    contentfulPage(slug: { eq: "home" }) {
      ...commonPageProps
    }
  }
`
