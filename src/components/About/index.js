import React from 'react';
import "./about.scss"
import mapImage from "../../images/map.jpg";

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__content">
            <h2 className="about__title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mattis dolor, sit amet rhoncus diam..
            </h2>
            <p className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mattis dolor, sit amet rhoncus diam. Donec varius est diam, vitae elementum risus imperdiet et. Praesent auctor velit nunc, quis pretium erat ornare at. Vivamus rhoncus a leo in gravida Praesent auctor velit nunc, quis pretium erat ornare at. Vivamus rhoncus a leo in gravida.
            </p>
          </div>
          <div className="about__image">
            <img src={mapImage} alt="Map" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
