import React, {  } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../../assets/image/banner1.jpeg"
import './banner.css'
const Caro = () => {

  
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
    };
  return (
    <div>
      <Slider {...settings}>
        <div id="banner_part" >
          <div className="container">
            <div className="col-lg-6">
              <div className="banner_content" data-aos="fade-up">
                <h1>
                  Make your Home, <span>Afford your Dream</span>
                </h1>
                <p>
                  lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's .
                </p>
                <a href="/about">See more</a>
              </div>
            </div>
          </div>
        </div>
        <section id="banner_part2">
          <div className="container">
            <div className="col-lg-6">
              <div className="banner_content" data-aos="fade-up">
                <h1>
                  Make your Home, <span>Afford your Dream</span>
                </h1>
                <p>
                  lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's .
                </p>
                <a href="/about">See more</a>
              </div>
            </div>
          </div>
        </section>
        <section id="banner_part3">
          <div className="container">
            <div className="col-lg-6">
              <div className="banner_content" data-aos="fade-up">
                <h1>
                  Make your Home, <span>Afford your Dream</span>
                </h1>
                <p>
                  lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's .
                </p>
                <a href="/about">See more</a>
              </div>
            </div>
          </div>
        </section>
      </Slider>
    </div>
  );
};

export default Caro;
