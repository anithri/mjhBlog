import React from 'react'
import { Layout, PagedList } from 'components'
import { ArtworkSummary } from 'components'

export const ArtworkPage = ({ data }) => {
  const { title, body } = data.page
  const html = body.childMarkdownRemark.html
  const artwork = data.artwork.edges.map(({node}) => node)

  return (
    <Layout title={title}>
      <section dangerouslySetInnerHTML={{ __html: html }} />
      <PagedList list={artwork} mkElement={(artwork, idx) => <ArtworkSummary artwork={artwork} idx={idx} /> } />
    </Layout>
  )
}
