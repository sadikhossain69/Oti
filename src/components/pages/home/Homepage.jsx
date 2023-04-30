import React from "react";
import Team from "../team/Team";

import Contact from "../contact/Contact";
import Testimonials from "../testimonial/Testimonials";
import ProjectPage from "../projects/ProjectPage";

import Counter from "../../counter/Counter";
import Facilities from "../../facilities/Facilities";
import Caro from "../bannar/Caro";
import ContactPage from "../contact/ContactPage";
import Caro2 from "../bannar/Caro2";

const Homepage = () => {
  return (
    <div>
      {/* <Caro /> */}
      <Caro2/>
      {/* <Banner /> */}
      <Counter />
      <Facilities />

      <ProjectPage />
      <Team />
      <Testimonials />
      {/* <Contact /> */}
      <ContactPage />
    </div>
  );
};

export default Homepage;
