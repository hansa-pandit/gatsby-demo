import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import React from 'react';
import testimonialIcon from '../../images/testimonial-icon.png';
import testimonialAuthor from '../../images/user-image.png';

const TestimonialSlider = (props) => {
  const settings = {
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="testimonial__item">
          <div className="testimonial__text">
            <span className="testimonial__icon">
              <img src={testimonialIcon} alt="Quote" />
            </span>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
            <span className="testimonial__arrow"></span>
          </div>

          <div className="testimonial__author">
            <img className="testimonial__author--image" src={testimonialAuthor} alt="Get in touch" />
            <div className="testimonial__author--details">
              <div className="testimonial__author--name">
                Client name
              </div>
              <div className="testimonial__author--position">
                Position, ORG
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial__item">
          <div className="testimonial__text">
            <span className="testimonial__icon">
              <img src={testimonialIcon} alt="Quote" />
            </span>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
            <span className="testimonial__arrow"></span>

          </div>

          <div className="testimonial__author">
            <img className="testimonial__author--image" src={testimonialAuthor} alt="Get in touch" />
            <div className="testimonial__author--details">
              <div className="testimonial__author--name">
                Client name
              </div>
              <div className="testimonial__author--position">
                Position, ORG
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial__item">
          <div className="testimonial__text">
            <span className="testimonial__icon" >
              <img src={testimonialIcon} alt="Quote" />
            </span>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo.
            </p>
            <span className="testimonial__arrow"></span>

          </div>

          <div className="testimonial__author">
            <img className="testimonial__author--image" src={testimonialAuthor} alt="Get in touch" />
            <div className="testimonial__author--details">
              <div className="testimonial__author--name">
                Client name
              </div>
              <div className="testimonial__author--position">
                Position, ORG
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default TestimonialSlider;
