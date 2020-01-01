import PropTypes from 'prop-types'
export const imageContainer = (image) => {
  return {...image}
}

export const imageShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired
})
