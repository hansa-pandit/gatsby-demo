import React from 'react';
import { Link } from 'gatsby';
import contactIcon from '../../images/get-in-touch.png';

function HeaderContact() {
  return (
    <Link to="#contactForm" className="site-header__contact--link" aria-label="Get in touch with us">
      <img className="site-header__contact--icon" src={contactIcon} alt="Get in touch" />
      <span>
          Get in touch
        </span>
    </Link>
  );
}

export default HeaderContact;
