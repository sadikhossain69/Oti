import React from 'react'
import './about.css'
import Aboutsec from './Aboutsec';
import Team from '../team/Team';
import Testimonials from '../testimonial/Testimonials';
const Aboutpage = () => {
  return (
    <div>
      <Aboutsec />
      <Team />
      <Testimonials/>
    </div>
  );
}

export default Aboutpage
