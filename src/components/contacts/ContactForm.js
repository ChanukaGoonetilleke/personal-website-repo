import React, {useEffect} from "react";
import emailjs from "emailjs-com";

import classes from './ContactForm.module.css';

import Aos from 'aos';
import "aos/dist/aos.css";

export default function ContactUs() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_44o5ibc",
        "template_chan",
        e.target,
        "user_VKYm4caccs0iurnXOZqRL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div data-aos="fade-right" className="container">
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
          </div>

          <div className="col-8 form-group pt-2 mx-auto">
            <textarea
              type="text"
              id=""
              cols="30"
              rows="8"
              className="form-control"
              placeholder="Your Message"
              name="message"
            ></textarea>
          </div>
          <div className="col-8 pt-3 mx-auto">
            <div className={classes.button}>
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
