import React from 'react'
import PropTypes from 'prop-types'

const FeaturedImage = ({className, images,}) => {

  return (
    <Image image={image} className={`featuredImage ${className}`} />
  )
}

export default FeaturedImage