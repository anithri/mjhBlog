import React from 'react'
import PropTypes from 'prop-types'

const Quote = ({children, className, subject }) => {
  const {body} = subject
  return (
    <article className={`quote ${className}`}>
      <section dangerouslySetInnerHTML={{ __html: body }} />
      {/*<Img resolutions={node.featuredImage.resolutions}/>*/}
    </article>
  )
}

Quote.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string.isRequired,
  subject: {
    body: PropTypes.string.isRequired,
  }
}

Quote.defaultProps = {
  className: ''
}

export default Quote
