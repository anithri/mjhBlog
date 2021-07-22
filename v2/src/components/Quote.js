import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import {GatsbyImage} from 'gatsby-plugin-image'

const Quote = (props) => {
  console.log('Quote props', props)
  const { children, className, subject } = props
  const { body, images } = subject
  let image
  if (images && images.length) {
    image = <GatsbyImage alt={images[0].title} image={images[0]} />
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
