import React from 'react'
import { Layout, FixedList } from 'components'
import { ArtworkSummary } from 'components'

export const ArtworkPage = ({ data, ...props }) => {
  console.log(data, props)
  const { title, body } = data.page
  const html = body.childMarkdownRemark.html
  const artwork = data.artwork.edges.map(({node}) => node)

  return (
    <Layout title={title}>
      <section dangerouslySetInnerHTML={{ __html: html }} />
      <FixedList list={artwork} mkElement={(artwork, idx) => <ArtworkSummary artwork={artwork} idx={idx} /> } />
    </Layout>
  )
}
