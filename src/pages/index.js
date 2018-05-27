import React from 'react'
import Helmet from 'react-helmet'

class HomePage extends React.Component {
  render() {
    const {
      title,
      slug,
      body: {
        childMarkdownRemark: { html: body },
      },
      theme: { skin },
    } = this.props.data.contentfulPage

    return (
      <article>
        <Helmet title={title} />,
        <h2>{title}</h2>,
        <section
          className="articleContent"
          dangerouslySetInnerHTML={{ __html: body }}
        />,
      </article>
    )
  }
}

export default HomePage

export const HomePageQuery = graphql`
  query homePageQuery {
    contentfulPage(slug: { eq: "home" }) {
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
