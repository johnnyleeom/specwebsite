import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4imzoxv', 'template_qqirlhj', form.current, {
        publicKey: 'FaWo_gMDIlbKD2irC',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 4000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    
    <form ref={form} onSubmit={sendEmail}>
        <div id = "nameBox">
        <label>Name</label>
        <input type="text" name="user_name" />
        </div>

        <div id = "emailBox">
        <label>Email</label>
        <input type="email" name="user_email" />
        </div>

        <div className="form-row messageRow">
  <label>Message</label>
  <textarea name="message"/>
  <input type="submit" value="Send" />
</div>
    </form>
     {submitted && <p style={{ color: 'lightgreen', marginTop: '1rem' }}>Message submitted!</p>}
     </>
  );
};
