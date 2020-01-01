module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-cssnext': {
      features: {
        customProperties: false,
        rem: false
      }
    }
  }
}
