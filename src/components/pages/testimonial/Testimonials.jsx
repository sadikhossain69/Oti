import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import './testimonials.css';

import { Data } from './Data';
import baseURL from '../../../utils/baseURL';

const Testimonials = () => {

  const [testimonialData, setTestimonialData] = useState([])

  const getTestimonialData = async () => {
    const { data } = await baseURL.get('/testimonial/list')
    setTestimonialData(data.data)
  }

  useEffect(() => {
    getTestimonialData()
  }, [])

  return (
    <section className="testimonial container section">
      <h2 className="section_title">OUR CLIENT OVSERVATIONS</h2>
      <h4 className="section_subtitle">Testimonial</h4>
      <Swiper className="testimonial_container"

        autoLoop={true}
        spaceBetween={24}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        //  breakpoints={{
        //    576: {
        //      slidesPerView: 2,
        //    },
        //    768: {
        //      slidesPerView: 3,
        //      spaceBetween: 18,
        //    },

        //  }}
        modules={[Pagination]}
      >
        {
          testimonialData.map(({ _id, name, description, profile }) => {

            return (
              <SwiperSlide className="testimonial_container" key={_id}>
                <section id="abdur_part " data-aos="fade-up">
                  <div className="container">
                    <div className="success_header">
                      <div class="col-lg-10 mars_left">
                        <div class="row">
                          <div class="col-lg-4 col-md-6">
                            <div class="abdur_left">
                              <img src={profile} alt="" srcset="" />
                            </div>
                          </div>
                          <div class="col-lg-7 col-md-6">
                            <div class="abdur_right">
                              <h5>{name}</h5>
                              {/* <h6>{pos}</h6> */}
                              <p>{description}</p>
                              <div class="start_icon">
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
            );

          })

        }
      </Swiper>
    </section>
  )
}

export default Testimonials
