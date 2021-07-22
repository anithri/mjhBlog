import React from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'

const Image = ({ className, image }) => {
  return (
    <figure className={`${className} imageFigure`}>
      <GatsbyImage alt={image.title} image={image} />
      <figcaption className="legend">{image.title}</figcaption>
    </figure>
  )
}

export default Image
