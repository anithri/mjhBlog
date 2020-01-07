import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Quote = ({ children, className, subject }) => {
  console.table('PageQuote', subject)
  const { body, images } = subject
  let image
  if (images) {
    image = <Img fluid={images[0].fluid} alt={images[0].title} />
  }
  return (
    <article className={`quote ${className}`}>
      {image}
      <section dangerouslySetInnerHTML={{ __html: body }} />
      {/*<Img resolutions={node.featuredImage.resolutions}/>*/}
    </article>
  )
}

Quote.defaultProps = {
  className: '',
}

export default Quote
