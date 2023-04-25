import React from "react";
import Team from "../team/Team";

import Contact from "../contact/Contact";
import Testimonials from "../testimonial/Testimonials";
import ProjectPage from "../projects/ProjectPage";

import Counter from "../../counter/Counter";
import Facilities from "../../facilities/Facilities";
import Caro from "../bannar/Caro";

const Homepage = () => {
  return (
    <div> 
      <Caro/>
      {/* <Banner /> */}
      <Counter />
      <Facilities/>
      
      <ProjectPage/>
      <Team />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Homepage;
