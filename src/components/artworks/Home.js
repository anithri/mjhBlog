import React, { useReducer } from 'react'
import SummaryList from './SummaryList'
import { ArtButton } from './ArtButton'
import { filterInit, filterReducer } from './filter'

export const ArtHome = ({ children, className, page, artworks = [] }) => {
  return (
    <section className={`${className} artHome`}>
      {children}
      <SummaryList artworks={artworks} title={"Birdies Art"} />
    </section>
  )
}

ArtHome.defaultProps = {
  className: '',
}

export default ArtHome
