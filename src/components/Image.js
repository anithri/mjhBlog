import React from 'react'
import Img from 'gatsby-image'
const Image = ({ className, image }) => {
  return (
    <figure className={`${className} imageFigure`}>
      <Img fluid={image.fluid} alt={image.title} />
      <figcaption className="legend">{image.title}</figcaption>
    </figure>
  )
}

export default Image
