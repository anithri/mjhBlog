import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from 'components'
// import { GatsbyImage } from 'gatsby-plugin-image'
import { useArrayPagination } from 'data'
import { BlogSummary } from 'components'

export const BlogPage = ({ data }) => {
  const { title, body } = data.blogPage
  const html = body.childMarkdownRemark.html
  const posts = data.posts.edges.map(({ node }) => node)
  const [shownPosts, nextPage, prevPage, info] = useArrayPagination(posts)
  const summaries = shownPosts.map(post => (
    <li key={`post-summary-${post.id}`}>
      <BlogSummary post={post} />
    </li>
  ))
  return (
    <Layout title={title}>
      <section dangerouslySetInnerHTML={{ __html: html }} />
      <ul>
        {summaries}
      </ul>
      <nav>
        <a onClick={() => prevPage()}>Prev</a>
        <a onClick={() => nextPage()}>Next</a>
      </nav>
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
