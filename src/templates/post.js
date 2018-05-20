import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Post = ({ node }) => {
  return (
    <article className={'pageArticle'}>
      <h3><Link to={node.slug}>{node.title}</Link></h3>
      <p>{node.createdAt}</p>
      <div>
        <div>
          {/*<Img resolutions={node.featuredImage.resolutions}/>*/}
        </div>
        <div>{node.content.childMarkdownRemark.excerpt}</div>
      </div>
    </article>
  )
}

const IndexPost = (props) => {
  console.log(props)
  return (
    <div>
      Stuff
      {/*<Page node={props} />*/}
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query PostQuery($id: String!) {
    contentfulPage(id: {eq: $id}) {
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