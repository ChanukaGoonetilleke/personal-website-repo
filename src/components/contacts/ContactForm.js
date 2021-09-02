import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

import classes from "./ContactForm.module.css";

import Aos from "aos";
import "aos/dist/aos.css";

import Success from "./Success";
import Error from "./Error";

export default function ContactUs() {
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
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
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setFail(true);
        }
      );
    e.target.reset();
  }

  const onCloseHanlder = (event) => {
    event.preventDefault();
    setSuccess(false);
    setFail(false);
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <h1 className={classes.title}>Contacts</h1>
        <div data-aos="fade-right" className="container" id="contacts">
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                  required
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
                {success && (
                  <Success className="form-control" onClose={onCloseHanlder} />
                )}
                {fail && (
                  <Error className="form-control" onClose={onCloseHanlder} />
                )}
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
      </div>
    </React.Fragment>
  );
}
