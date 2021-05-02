import React from 'react'
import { graphql} from 'gatsby'
import { Layout, FixedList } from 'components'
import { BlogSummary } from 'components'

const BlogPage = ({ data, pageContext }) => {
  const { title, body } = data.blogPage
  const html = body.childMarkdownRemark.html
  const posts = data.posts.edges.map(({ node }) => node)
  const {prevPage, nextPage, currentPage} = pageContext
  return (
    <Layout title={title}>
      <section dangerouslySetInnerHTML={{ __html: html }} />
      <FixedList list={posts}
                 prevPage={prevPage}
                 nextPage={nextPage}
                 currentPage={currentPage}
                 mkElement={post => <BlogSummary post={post} />} />
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query GetContentfulPage($skip: Int!, $limit: Int!) {
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
    posts: allContentfulPost(   
      sort: { fields: [publishOn], order: DESC },
      skip: $skip, limit: $limit
    ) {
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
