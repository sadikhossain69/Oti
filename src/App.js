import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Aboutpage from "./components/pages/about/Aboutpage";
import Contactpage from "./components/pages/contact/Contact";
import Homepage from "./components/pages/home/Homepage";
import Testimonials from "./components/pages/testimonial/Testimonials";
import Navbar from "./components/nav/Navbar";

import Aos from 'aos'
import 'aos/dist/aos.css'
import ProjectPage from "./components/pages/projects/ProjectPage";
import ProjectDetails from "./components/pages/projects/ProjectDetails";
import ContactPage from "./components/pages/contact/ContactPage";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 100 });
  }, [])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />

          <Route path="/products" element={<ProjectPage />} />
          <Route path="/products/:id" element={<ProjectDetails />} />

          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
