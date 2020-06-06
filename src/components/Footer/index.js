import React from 'react';
import "./footer.scss"
import { FaEnvelope, FaFacebookSquare, FaTwitter, FaLinkedin} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__inner">
          <div className="copyright">
            © {new Date().getFullYear()}, Copyright. All rights reserved.
          </div>
          <div className="follow-us">
            <span>Follow us on:</span>
            <a className="site-footer__social-link" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare
                size="16px"
              />
            </a>
            <a className="site-footer__social-link" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin
                size="16px"
              />
            </a>
            <a className="site-footer__social-link" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter
                size="16px"
              />
            </a>
            <a className="site-footer__social-link" href="/" target="_blank" rel="noopener noreferrer">
              <FaEnvelope
                size="16px"
              />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
