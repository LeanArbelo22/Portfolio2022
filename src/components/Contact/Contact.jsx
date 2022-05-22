import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss';

function Contact() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gmail', 'template_0l0au5g', form.current, 'aL1V8cQtieRwRmVTA')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
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
        </form>
      </div>
    </div>
  )
}

export default Contact;