import React from 'react';
import { Link } from 'gatsby';
import contactIcon from '../../images/get-in-touch.png';

function HeaderContact() {
  return (
    <div className="site-header__contact--block">
      <Link to="/" className="site-header__contact--link">
        <img className="" src={contactIcon} alt="Get in touch" />
        <span>
          Get in touch
        </span>
      </Link>
    </div>
  );
}

export default HeaderContact;
