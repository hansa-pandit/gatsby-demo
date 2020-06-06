import React from 'react';
import { Link } from 'gatsby';
import "./services.scss"
import serviceIcon1 from '../../images/service-icon1.png';
import serviceIcon2 from '../../images/service-icon2.png';
import serviceIcon3 from '../../images/service-icon3.png';

function Services() {
  return (
    <div className="services">
      <Link to="/" className="services__item">
        <img className="services__icon" src={serviceIcon1} alt="Service 1" title="Service 1"/>
        <span className="services__title">
          Service Name
        </span>
      </Link>
      <Link to="/" className="services__item">
        <img className="services__icon" src={serviceIcon2} alt="Service 2" title="Service 2" />
        <span className="services__title">
          Service Name
        </span>
      </Link>
      <Link to="/" className="services__item">
        <img className="services__icon" src={serviceIcon3} alt="Service 3" title="Service 3"/>
        <span className="services__title">
            Service Name
        </span>
      </Link>
    </div>
  );
}

export default Services;
