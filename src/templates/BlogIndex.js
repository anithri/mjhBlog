import React from 'react'
import { graphql } from 'gatsby'
import { Layout, FixedList } from 'components'
import { BlogSummary } from 'components'
export {query} from '../pages/'

const BlogPage = ({ data, pageContext }) => {
  const { title, body } = data.blogPage
  const html = body.childMarkdownRemark.html
  const posts = data.posts.all.map(({ node }) => node)
  return (
    <Layout title={title}>
      <section dangerouslySetInnerHTML={{ __html: html }} />
      <FixedList list={posts}
                 {...pageContext}
                 mkElement={post => <BlogSummary post={post} />} />
    </Layout>
  )
}

export default BlogPage

