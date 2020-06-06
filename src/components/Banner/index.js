import React from 'react';
import "./banner.scss"
import Services from "./Services";

function Banner() {
  return (
    <section className="banner" role="banner">
      <div className="container">
        <h1 className="banner__title">
          Integer bibendum sit ametarcu vel agestas.
        </h1>
        <Services/>
      </div>
    </section>
  );
}

export default Banner;
