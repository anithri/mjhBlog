import React from 'react'
import { Layout, PagedList, ArtworkSummary } from 'components'

export const ArtworkIndexPage = ({ data, ...props }) => {
  console.log('ArtworkPage',data, props)
  const { title, body, pageQuote, images } = data.page
  const artwork = data.artwork.all.map(({node}) => node)
  return (
    <Layout title={title}
            pageQuote={pageQuote}
            featuredImage={images && images[0]}
            contentfulBody={body}>
      <PagedList list={artwork} mkElement={(artwork, idx) => <ArtworkSummary artwork={artwork} idx={idx} /> } />
    </Layout>
  )
}
