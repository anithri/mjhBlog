import React from 'react'
import PropTypes from 'prop-types'

const PostArticle = ({ className }) => {
  return (
    <article className={`${className} postArticle`}>
      <h3>
        <Link to={node.slug}>{node.title}</Link>
      </h3>
      <p>{node.createdAt}</p>
      <div>
        <div>{/*<Img resolutions={node.featuredImage.resolutions}/>*/}</div>
        <div>{node.content.childMarkdownRemark.excerpt}</div>
      </div>
    </article>
  )
}

PostArticle.propTypes = {
  className: PropTypes.string,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
    displayTime: PropTypes.string.isRequired,
  }),
}

PostArticle.defaultProps = {
  className: '',
}

export default PostArticle
