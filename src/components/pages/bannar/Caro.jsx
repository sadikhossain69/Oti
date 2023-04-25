import React, { } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideData } from "./slideData";
import './banner.css'
import SingleSlide from "./SingleSlide";

const Caro = () => {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {
          slideData.map(e => <SingleSlide
            key={e.id}
            signleSlide={e}
          />)
        }
      </Slider>
    </div>
  );
};

export default Caro;
