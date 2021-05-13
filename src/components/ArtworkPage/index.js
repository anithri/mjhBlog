import React from 'react'
import { Layout, FixedList } from 'components'
import { ArtworkSummary } from 'components'

export const ArtworkPage = ({ data, ...props }) => {
  console.log('ArtworkPage',data, props)
  const { title, body, pageQuote, images } = data.page
  const html = body && body.childMarkdownRemark.html
  const artwork = data.artwork.all.map(({node}) => node)

  return (
    <Layout title={title} pageQuote={pageQuote} featuredImage={images[0]} contentfulBody={body}>
      <FixedList list={artwork} mkElement={(artwork, idx) => <ArtworkSummary artwork={artwork} idx={idx} /> } />
    </Layout>
  )
}
