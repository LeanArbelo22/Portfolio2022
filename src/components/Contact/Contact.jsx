import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
        <div className="social">
            <a href="https://www.linkedin.com/in/leandro-arbelo-56ba46172/" taget="_blank" rel="noreferrer"><LinkedInIcon className="social-icon"/></a>
            <a href="https://github.com/LeanArbelo22" taget="_blank" rel="noreferrer"><GitHubIcon className="social-icon"/></a>
            <a href="https://api.whatsapp.com/send/?phone=5493515912166&text&app_absent=0" target="_blank" rel="noreferrer"><WhatsAppIcon className="social-icon"/></a>
        </div>
      </div>
    </div>
  )
}

export default Contact;