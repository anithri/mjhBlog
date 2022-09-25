import React from 'react'
import { Layout, PagedList, BlogSummary } from 'components'
const locPage = ({ search }) => parseInt(search.split('page=').reverse()[0].split('&')[0]) || 1

export const BlogPage = ({ data, location, pageContext, ...props }) => {
  // console.log('BlogPage', props)

  const startPage = locPage(location)
  const { body, pageQuote, images } = data.page
  const posts = data.posts.all.map(({ node }) => node)
  const title = pageContext.title || data.page.title
  return (
    <Layout
      title={title}
      contentfulBody={body}
      pageQuote={pageQuote}
      featuredImage={images && images[0]}
    >
      <h2>{title}</h2>
      <PagedList
        list={posts}
        startPage={startPage}
        mkElement={(post, idx) => <BlogSummary post={post} idx={idx} />}
      />
    </Layout>
  )
}
