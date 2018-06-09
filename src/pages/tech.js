import React from 'react'
import Helmet from 'react-helmet'
import Quote from '../components/Quote'
import pageContainer, {contentfulPageShape} from '../containers/page'
import PropTypes from 'prop-types'

const Tech = (_props) => {
  return (
    <main>
      <header>
        <h2>Open Source Software</h2>
      </header>
      <section>
        <p>May thanks to the thousands of contributers upon who's shoulders we stand</p>
        <ul>
          <li>Contentful</li>
          <li>Netlify</li>
          <li>React</li>
          <li>Graphql</li>
          <li>PostCSS</li>
          <li>Tachyons</li>
        </ul>
      </section>
    </main>
  )
}

export default Tech
