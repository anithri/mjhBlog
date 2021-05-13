import React from 'react'
import { Layout, FixedList } from 'components'
import { BlogSummary } from 'components'

export const BlogPage = (props) => {
  console.log('BlogPage', props)
  const { title, body } = props.data.page
  const html = body.childMarkdownRemark.html
  const posts = props.data.posts.all.map(({ node }) => node)

  return (
    <Layout title={title}>
      <section dangerouslySetInnerHTML={{ __html: html }} />
      <FixedList list={posts} mkElement={(post, idx) => <BlogSummary post={post} idx={idx} />} />
    </Layout>
  )
}
