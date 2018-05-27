import React from 'react'
import PropTypes from 'prop-types'

const Article = ({ children, className, subject }) => {
  const { body, dateTime, publishDate, title } = subject
  var timeHeader
  if (publishDate) {
    timeHeader = (<time dateTime={dateTime}>{publishDate}</time>)
  }
  return (
    <article className={`${className} article`}>
      <header>
        <h3>{title}</h3>
        {timeHeader}
      </header>
      <section dangerouslySetInnerHTML={{ __html: body }} />
      <div>{/*<Img resolutions={node.featuredImage.resolutions}/>*/}</div>
      {children}
    </article>
  )
}

Article.propTypes = {
  className: PropTypes.string,
  subject: PropTypes.shape({
    title: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
    publishDate: PropTypes.string,
    body: PropTypes.string,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

Article.defaultProps = {
  className: '',
}

export default Article
