import React from 'react';
import TestimonialSlider from './TestimonialSlider'
import "./testimonial.scss"

function Testimonial() {
  return (
    <section className="testimonial">
      <div className="container">
        <h2 className="testimonial__title">
          Testimonials
        </h2>
        <div className="testimonial__list">
          <TestimonialSlider  />
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
