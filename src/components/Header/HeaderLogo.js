import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../images/logo.png';

function HeaderLogo() {
  return (
    <div className="site-logo">
      <Link to="/" className="site-logo">
        <img className="" src={Logo} alt="Logo" />
      </Link>
    </div>
  );
}

export default HeaderLogo;
