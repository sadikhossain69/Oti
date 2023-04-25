import React from 'react'
import { FaFacebook, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import team from '../../../assets/image/success_img.png'
import './team.css'
const Team = () => {
  return (
    <section id="our_success" data-aos="fade-up">
      <div class="container">
        <div class="success_header">
          <h2>Our Expert Team</h2>
        </div>
        <div class="col-lg-10 offset-1 success_margin">
          <div class="success_main">
            <div class="row">
              <div class="col-lg-4 col-md-5">
                <div class="success_img">
                  <img src={team} alt="" srcset="" />
                </div>
              </div>
              <div class="col-lg-8 col-md-7">
                <div class="success_content">
                  <h4>Mohammad Ali Hossain</h4>
                  <h5>Chief Engineer / Dream Cottage</h5>
                  <h6>MSc in Civil Engineering,BUET</h6>
                  <p>
                    Engineers typically specialize in specific fields such as
                    civil engineering, mechanical engineering, electrical
                    engineering, chemical engineering, and software engineering,
                    among others. They work in a variety of settings, including
                    government agencies, research facilities, consulting firms,
                    and private corporations.
                  </p>
                  <div class="success_icon">
                    <a href="https://www.facebook.com/dreamcottageltd">
                      <FaFacebook className="icon"></FaFacebook>
                    </a>
                    <a href="mailto:dreamerpropertiesltd@gmail.com">
                      <FaEnvelope className="icon"></FaEnvelope>
                    </a>
                    <a href="tel:01922-090882">
                      <FaPhoneAlt className="icon"></FaPhoneAlt>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team
