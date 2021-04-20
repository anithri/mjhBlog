import React, { useReducer } from 'react'
import SummaryList from './SummaryList'
import { PostButton } from './PostButton'
import { filterInit, filterReducer } from './filter'

const PostHome = ({ children, className, page, posts = [] }) => {
  return (
    <section className={`${className} postHome`}>
      {children}
      <SummaryList posts={posts} title={"Birdies Blog"} />

    </section>
  )
}

PostHome.defaultProps = {
  className: '',
}

export default PostHome
