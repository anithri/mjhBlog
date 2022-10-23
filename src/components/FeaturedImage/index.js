import React from 'react'
import cx from 'classnames'
import * as styles from './styles.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

export const FeaturedImage = ({image, className, ...props}) => {
  // console.log(image)
  return (
      <GatsbyImage
          {...props}
          className={cx(className, styles.featuredImage)}
          image={image.gatsbyImageData}
          alt={image.title}
      />
  )
}
