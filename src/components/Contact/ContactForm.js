import React from 'react';

function ContactForm() {
  return (
    <form className="contact-form" id="contactForm">
      <fieldset className="form-fieldset">
        <div className="form-group">
          <div className="form-element">
            <label htmlFor="fullName" className="visually-hidden">Full name</label>
            <input
              id="fullName"
              className="form-input"
              name="fullname"
              placeholder="Fullname"
              type="text"
              aria-label="Enter your Full name"
            />
          </div>
          <div className="form-element">
            <label htmlFor="emailId" className="visually-hidden">Email Address</label>
            <input
              id="emailId"
              className="form-input"
              name="email"
              type="email"
              placeholder="Email Address"
              aria-label="Enter your Email address"
            />
          </div>
          <div className="form-element">
            <label htmlFor="phoneNumber" className="visually-hidden">Phone Number</label>
            <input
              id="phoneNumber"
              className="form-input"
              name="phonenumber"
              type="email"
              placeholder="Phone Number"
              aria-label="Enter your phone number"
            />
          </div>
        </div>
        <div className="form-element">
          <label htmlFor="textMessage" className="visually-hidden">Message</label>
          <textarea
            id="textMessage"
            className="form-input"
            name="fullname"
            placeholder="Message in brief"
            rows="6"
            cols="50"
            aria-label="Enter your message"
          />
        </div>
        <div className="form-element">
          <button
            className="button button__primary--orange"
            type="submit"
            value="Submit">
            Submit
          </button>
        </div>
      </fieldset>

    </form>
  );
}
export default ContactForm;


