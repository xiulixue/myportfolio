/** @format */

import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_x50vlqn",
      "template_ma8e6bq",
      form.current,
      "g1H6ACDwO2DN8WPAV"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>xuemurphy@gmail.com</h5>
            <a href="mailto:xuemurphy@gmail.com" target="_blank">
              Send an email
            </a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>Xiuli(Murphy) Xue</h5>
            <a href="https://www.facebook.com/snowie.mophy" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary btn-primary-left">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
