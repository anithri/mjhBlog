import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout, PagedList } from 'components'
import { BlogSummary } from 'components'

export const BlogPage = ({ data }) => {
  const { title, body } = data.blogPage
  const html = body.childMarkdownRemark.html
  const posts = data.posts.edges.map(({ node }) => node)

  return (
    <Layout title={title}>
      <section dangerouslySetInnerHTML={{ __html: html }} />
      <PagedList list={posts} mkElement={post => <BlogSummary post={post} />} />
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query GetContentfulPage {
    blogPage: contentfulPage(slug: {eq: "blog"}) {
      id
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      images {
        gatsbyImageData
      }
    }
    posts: allContentfulPost(   sort: { fields: [publishOn], order: DESC }) {
      edges {
        node {
          id
          title
          summary
          slug
          year: publishOn(formatString: "YYYY")
          month: publishOn(formatString: "MM")
          day: publishOn(formatString: "DD")
        }
      }
    }
  }

`
