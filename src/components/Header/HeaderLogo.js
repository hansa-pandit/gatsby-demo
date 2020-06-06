import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../images/logo.png';

function HeaderLogo() {
  return (
    <div id="siteLogo" className="site-logo">
      <Link to="/" className="site-logo" aria-label="Company Logo name">
        <img className="" src={Logo} alt="Logo" />
      </Link>
    </div>
  );
}

export default HeaderLogo;
