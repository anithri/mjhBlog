import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SummaryList from './SummaryList'

const PostHome = ({ children, className, page, posts }) => {
  const [openSection, changeSection] = useState(-1)
  // const recentPosts = posts.slice(0, 3)
  // const postsByYear = {}
  // const postsByYearMonth = {}
  //
  // posts.sort((a,b) => b.publishOn - a.publishOn).forEach(post => {
  //   const year = post.publishOn.slice(0,4)
  //   const month = post.publishOn.slice(5,7)
  //   postsByYear[year] = postsByYear[year] || []
  //   postsByYear[year].push(post)
  //
  //   postsByYearMonth[year] = postsByYearMonth[year] || {}
  //   postsByYearMonth[year][month] = postsByYearMonth[year][month] || []
  //   postsByYearMonth[year].all = postsByYearMonth[year].all || []
  //   postsByYearMonth[year].all.push(post)
  //   postsByYearMonth[year][month].push(post)
  // })
  //
  // console.log('postsByYear', Object.values(postsByYear))
  //
  // const listsByYear = Object.keys(postsByYear)
  //   .map(k => {console.log('listByYear', k); return k})
  //   .sort((a, b) => b - a)
  //   .map((year, idx) =>
  //     <SummaryList doClick={(e) => changeSection(idx + 1)} isOpen={idx === openSection} posts={postsByYear[year]} title={year} key={`year-${year}`} />,
  //   )
  return (
    <section className={`${className} postHome`}>
      {/*<SummaryList doClick={() => changeSection(0)} isOpen={openSection < 0} posts={recentPosts} title="Recent" key={'recent-posts'}/>)*/}
      {/*{listsByYear}*/}
      <ul className="yearSelector">
        <li className={'selectWide'}>
          <div>
            <header>all</header>
          </div>
        </li>

        <li>
          <div>
            <header>1</header>
          </div>
        </li>
        <li>
          <div>
            <header>2</header>
          </div>
        </li>
        <li>
          <div>
            <header>3</header>
          </div>
        </li>
        <li>
          <div>
            <header>4</header>
          </div>
        </li>
        <li>
          <div>
            <header>5</header>
          </div>
        </li>
        <li>
          <div>
            <header>6</header>
          </div>
        </li>
        <li>
          <div>
            <header>7</header>
          </div>
        </li>
        <li>
          <div>
            <header>8</header>
          </div>
        </li>
        <li>
          <div>
            <header>9</header>
          </div>
        </li>
        <li>
          <div>
            <header>10</header>
          </div>
        </li>
        <li>
          <div>
            <header>11</header>
          </div>
        </li>
        <li>
          <div>
            <header>12</header>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div><header>Recent</header></div>
        </li>
        <li>
          <div><header>2020</header></div>
        </li>
        <li>
          <div><header>2019</header></div>
        </li>
        <li>
          <div><header>2018</header></div>
        </li>
      </ul>
      {children}

    </section>
  )
}

const PostNav = ({}) => {

}


PostHome.defaultProps = {
  className: '',
}

export default PostHome
