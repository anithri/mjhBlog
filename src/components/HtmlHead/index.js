import React from 'react'
import Helmet from 'react-helmet'
import { useSiteMetadata } from 'data'
import typographyTheme from 'react-helmet'
import { TypographyStyle } from 'react-typography'

export const HtmlHead = ({ description, lang, meta, title }) => {
  const siteMetadata = useSiteMetadata()

  const metaDescription = description || siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    >
      <TypographyStyle typography={typographyTheme} />
    </Helmet>
  )
}

HtmlHead.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default HtmlHead
