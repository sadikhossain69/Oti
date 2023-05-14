import React from 'react'
import { NavLink } from 'react-router-dom';
import './footer.css'
import {
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { SiWhatsapp } from 'react-icons/si'
import {BsInstagram, BsYoutube} from "react-icons/bs"
// import footer from "../../assets/image/footerimage.png"
import footer from '../../assets/image/dreamer.png'
const Footer = () => {
  return (
    <div>
      <section id="footer_part">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer_one">
                <img src={footer} alt="" />
                <p>
                  Dreamer Properties Ltd is such an organization which was
                  initiated by some Visionary people who had worked hard and
                  have been serving people with their dream cottage through a
                  Symphony of bricks and cement.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="footer_two_main d-flex">
                <div className="footer_2">
                  <h6>Pages</h6>
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/products">Properties</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="footer_four">
                <h6>Contact</h6>
                <div className="footer_four_item d-flex">
                  <FaPhoneAlt className='footer_four_items_icon'></FaPhoneAlt>
                  <span>
                    <a href="tel:01922-090882">01922-090882</a>
                  </span>
                </div>
                <div className="footer_four_item d-flex">
                  <FaEnvelope className='footer_four_items_icon'></FaEnvelope>
                  <span>
                    <a href="mailto:dreamerpropertiesltd@gmail.com">
                      dreamerpropertiesltd@gmail.com
                    </a>
                  </span>
                </div>
                <div className="footer_four_item ">
                  <FaMapMarkedAlt className='footer_four_items_icon'></FaMapMarkedAlt>
                  <span>
                    213/84/A213/84/A, Dream Cottage-01, Samad Nagar Residential
                    Area, Kajlar Par , Jatrabari,Dhaka, Dhaka, Bangladesh
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer_five">
                <h6>Social media</h6>
                <div className="footer_icons">
                  <a href="https://www.facebook.com/dreamcottageltd">
                    <FaFacebook className="icon"></FaFacebook>
                  </a>
                  <a href="mailto:dreamerpropertiesltd@gmail.com">
                    <FaEnvelope className="icon"></FaEnvelope>
                  </a>
                  <a href="tel:01922-090882">
                    <FaPhoneAlt className="icon"></FaPhoneAlt>
                  </a>
                  <a href="/">
                    <BsInstagram className="icon" />
                  </a>
                  <a href="/" target='_blank'>
                    <BsYoutube className="icon" size={21} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a href="https://api.whatsapp.com/send/?phone=%2B8801922090882&text&type=phone_number&app_absent=0" target={'_blank'} rel="noreferrer">
            <SiWhatsapp className='whatsapp_icon' size={58} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Footer
