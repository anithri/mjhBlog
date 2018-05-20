import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Page = ({ title, slug, body }) => {
  return (
    <article className={'pageArticle'}>
      <h3><Link to={slug}>{title}</Link></h3>
      <section dangerouslySetInnerHTML={{ __html: body }} />
      {/*<Img resolutions={node.featuredImage.resolutions}/>*/}
    </article>
  )
}

const IndexPage = (props) => {
  return (
    <div>
      Stuff
      {/*<Page node={props} />*/}
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query PageQuery($slug: String!) {
    contentfulPage(slug: {eq: $slug}) {
      slug
      title
      body {
        childMarkdownRemark{
          html
        }
      }
    }
  }
`