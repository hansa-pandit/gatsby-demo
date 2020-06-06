import React from 'react';
import "./contact.scss"
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="contact-banner">
      <div className="container">
        <div className="contact-banner__title-text">
          <h2 className="contact-banner__title">
            Convinced to work with us?
          </h2>
          <p className="contact-banner__text">Company has helped agencies keep their promises to clients since 2005.</p>
        </div>
        <ContactForm/>
      </div>
    </section>
  );
}

export default Contact;
