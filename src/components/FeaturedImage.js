import React from 'react'
import Image from './Image'

const FeaturedImage = ({className, image}) => {
  return (
    <Image image={image} className={`featuredImage ${className}`} />
  )
}

export default FeaturedImage
