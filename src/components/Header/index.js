import React from 'react';
import HeaderLogo from "./HeaderLogo";
import HeaderContact from "./HeaderContact";

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <HeaderLogo/>
        <HeaderContact/>
        <div className="header-bottom">
          <nav className="main-navigation">
            Hansa
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
