import React from 'react'
import Helmet from 'react-helmet'
import Article from '../../components/Article'
import postContainer, { contentfulShape } from '../../containers/post'

const PostArticle = (props) => {
  const { data: { contentfulPost } } = props
  const post = postContainer(contentfulPost)
  return (
    <Article subject={post} className={`${post.skin} postArticle`}>
      <Helmet title={post.title} />
    </Article>
  )
}

PostArticle.propTypes = {
  data: {
    contentfulPost: contentfulShape,
  },
}

export default PostArticle

export const PostArticleQuery = graphql`
  query PostArticleQuery($contentful_id: String!) {
    contentfulPost(contentful_id: { eq: $contentful_id}) {
      ...commonPostFragment
    }
  }
`
