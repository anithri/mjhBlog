import React from 'react'

const TextPage = ({ data: { contentfulPage: page } }) => {
  const {
    title, slug,
    body: { childMarkdownRemark: { html: body } },
    theme: {skin}
  } = page
  return (
    <article className={`textPage ${skin} ${slug}Slug`}>
      <h2>{title}</h2>
      <section dangerouslySetInnerHTML={{ __html: body }} />
      {/*<Img resolutions={node.featuredImage.resolutions}/>*/}
    </article>
  )
}

export default TextPage

export const pageQuery = graphql`
  query textPageQuery($slug: String!) {
    contentfulPage(slug: {eq: $slug}) {
      slug
      title
      body {
        childMarkdownRemark{
          html
        }
      }
      theme {
        skin
      }
    }
  }
`