import React, { useState } from 'react';
import { Link } from "gatsby"
import HeaderLogo from "./HeaderLogo";
import HeaderContact from "./HeaderContact";
import hamburger from "../../images/hamburger-icon.png";
import closeIcon from "../../images/close-icon.png";


const Header = ({ siteTitle, menuLinks }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__inner">
          <HeaderLogo/>
          <div className="site-header__right">
            <div className="site-navigation" role="navigation">
              <a href="#mainNavigation" id="navigationLink" className="site-navigation__hamburger" tabIndex="0" aria-label="Open navigation" onClick={() => menuToggle()}>
                <img className="site-navigation__hamburger-icon" src={hamburger} alt="Get in touch" />
              </a>
              <nav id="mainNavigation" className={`site-navigation__wrapper ${isExpanded ? 'is-expanded' : ''}`}>
                <ul className="menu">
                  {menuLinks.map(link => (
                    <li
                      key={link.name}
                      className="menu-item"
                    >
                      <Link to={link.link}  className="menu-item-link" aria-label={link.name}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <a href="#navigationLink" className="close-icon" tabIndex="0"  aria-label="close navigation"  onClick={() => menuToggle()}>
                   <img src={closeIcon} alt="close navigation" />
                </a>
              </nav>
            </div>
            <div className="site-header__contact--block-desktop">
              <HeaderContact/>
            </div>
          </div>
          <div className="site-header__contact--block-mobile">
            <HeaderContact/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;



