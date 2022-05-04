import * as React from 'react'
import * as styles from './styles.module.css'
import { Link } from 'gatsby'

export const ArtWalkBanner = props => {

  return (
      <div className={styles.banner}>
        <h1>Monte Vista Art Walk</h1>
        <p>
          Join us in downtown Monte Vista from 4:00 pm to 8:00 pm<br />
          on the 3rd Fridays of May, June, July, and August. &nbsp;
          <Link to={'/blog/2022/05/01/monte-vista-art-walk-2022.html'}>
            Learn more
          </Link>
        </p>
      </div>
  )
}
