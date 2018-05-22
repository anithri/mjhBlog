import React from 'react'
import Helmet from 'react-helmet'
class RootIndex extends React.Component {
  render() {
    const {
      title, slug,
      body: {
        childMarkdownRemark: {html: body}
      }
    } = this.props.data.contentfulSiteData.homePage

    return (
      <article>
        <Helmet title={title} />,
        <h2 >{title}</h2>,
        <section className="articleContent"
                 dangerouslySetInnerHTML={{ __html: body }}
        />,
      </article>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query indexPage {
    contentfulSiteData(current: {eq: "current"}) {
      homePage {
        title
        body {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`