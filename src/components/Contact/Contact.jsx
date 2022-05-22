import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss';

function Contact() {

  const form = useRef()
  const [myMessage, setMyMessage] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gmail', 'template_0l0au5g', form.current, 'aL1V8cQtieRwRmVTA')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    setMyMessage(true);
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="svg" />
      </div>
      <div className="right">
        <h2>Contact me.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message" />
          <button type="submit">Send</button>
          {myMessage && <span>Thanks, I'll reply as soon as possible 😃</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact;