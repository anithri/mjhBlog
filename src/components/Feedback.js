import React from 'react'

const Feedback = ({toggle}) => {
  return (
    <form className="feedbackForm" name="contact" method="POST" netlify>
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

    </form>
  )
}

export default Feedback
