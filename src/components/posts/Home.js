import React from 'react'
import PropTypes from 'prop-types'
import SummaryList from './SummaryList'
import { contentfulPageShape } from '../../containers/page'
import { contentfulPostShape } from '../../containers/post'

const PostHome = ({ children, className, page, posts }) => {
  return (
    <section className={`${className} postHome`}>
      <header>
        <h2>{page.title}</h2>
      </header>
      <SummaryList posts={posts} />
      {children}
    </section>
  )
}

PostHome.propTypes = {
  className: PropTypes.string,
  page: contentfulPageShape.isRequired,
  posts: PropTypes.arrayOf(contentfulPostShape).isRequired,
  children: PropTypes.oneOf([
    PropTypes.func,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.func),
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

PostHome.defaultProps = {
  className: '',
}

export default PostHome
