import React from 'react'

const Feedback = ({toggle}) => {
  return (
    <form className="feedbackForm" name="contact" method="POST" data-netlify="true">
      <input
        type="email"
        name="name"
        placeholder={'Your Email'}
        className="email"
      />
      <textarea name="message" placeholder={'Message'} className="message" rows={6}/>
      <div data-netlify-recaptcha className="captcha" />

      <button className="cancel" onClick={e => toggle()}>
        Cancel
      </button>

      <button className="submit" type="submit">
        Send
      </button>
      <input type="hidden" name="form-name" value="contact" />
    </form>
  )
}

export default Feedback
