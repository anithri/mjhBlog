import React, {useState} from 'react'
import cx from 'classnames'

const Feedback = ({toggle, toggledOn}) => {
  const [setToggle, toggledOn] = useState(false)
  const classes = cx("feedbackForm", toggledOn || 'dn')
  return (
    <form className={classes} name="contact" method="POST" data-netlify="true">
      <input
        type="email"
        name="name"
        placeholder={'Your Email'}
        className="email"
      />
      <textarea name="message" placeholder={'Message'} className="message" rows={6}/>
      <div data-netlify-recaptcha className="captcha" />

      <a className="cancel" onClick={e => toggle(!toggledOn)}>
        Cancel
      </a>

      <button className="submit" type="submit">
        Send
      </button>

      <input type="hidden" name="form-name" value="contact" />
    </form>
  )
}

export default Feedback
