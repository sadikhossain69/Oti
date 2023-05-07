import React, { useEffect, useState } from 'react'
import './about.css'
import story from "../../../assets/image/story_img.png";
import vision from '../../../assets/image/vision_shape.png';
import icon1 from '../../../assets/image/icons2.png'
import icon2 from '../../../assets/image/icons.png'
import icon3 from '../../../assets/image/icons3.png'
import baseURL from '../../../utils/baseURL';

const Aboutsec = () => {


  const [aboutData, setAboutData] = useState({})

  const getAboutData = async () => {
    const { data } = await baseURL.get(`/about/list`)
    setAboutData(data.data)
  }

  useEffect(() => {
    getAboutData()
  }, [])

  return (
    <>
      <section id="banner_About">
        <div className="container">
          <div className="col-lg-10 text-center offset-1 banner_mars">
            <div className="about_banner" data-aos="zoom-in">
              <h2>We are the Dreamer</h2>
              <p>
                For years we have been dreaming to sow your seed of Dream Home{" "}
                <span>
                  through a tune of sand and stone which you can call your own
                  Paradise
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- about banner part end -->

    <!-- our story part start --> */}
      <section id="ours_story">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="story_left" data-aos="fade-right">
                <img src={story} alt="" srcset="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="story_rights" data-aos="fade-left">
                <h4>OUR STORY</h4>
                <p>
                  Dreamer Properties Ltd is such an organization which was
                  initiated by some Visionary people who had worked hard and
                  have been serving people with their dream cottage through a
                  Symphony of bricks and cement.
                </p>
                <p>
                  It was established in 2020 with a simple but strong promise to
                  provide dream home s with affordable efforts. Only after 2
                  years, it has already served 70 families with their peace home
                  and satisfied smile. DPL became the symbol of trust to the
                  people in Housing and Real Estate arena in Bangladesh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- our story part end -->


    <!-- our mission part start --> */}
      <section id="mission_part" data-aos="zoom-out">
        <div className="container">
          <div className="col-lg-7">
            <div className="mission_main">
              <h4>OUR MISSION </h4>
              <p>
                <i className="fa-solid fa-quote-left"></i>”{aboutData.mission}”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- our mission part end -->


    <!-- our vision part start --> */}
      <section id="our_visions">
        <div className="container positons_shape">
          <div className="col-lg-8 offset-2 vision_margins">
            <div className="our_visionmain">
              <h4>OUR VISION</h4>
              <p>
                <i className="fa-solid fa-quote-left"></i>”{aboutData.vision}”
              </p>
            </div>
            <div className="vision_img">
              <img src={vision} alt="" srcset="" data-aos="zoom-out" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- our vision part end -->

    <!-- philosophy part start --> */}
      <section id="philosophy_part">
        <div className="container">
          <div className="col-lg-10 offset-2 philoshpy_margin">
            <div className="philosopy_item ">
              <h4>OUR PHILOSOPHY</h4>
              <div
                className="philo_itms d-flex"
                data-aos="fade-right"
                data-aos-duration="1000">
                <img src={icon1} alt="" />
                <p>
                  {aboutData.philosophy[0]}
                </p>
              </div>
              <div
                className="philo_itms d-flex"
                data-aos="fade-right"
                data-aos-duration="1500">
                <img src={icon2} alt="" />
                <p>
                  {aboutData.philosophy?.[1]}
                </p>
              </div>
              <div
                className="philo_itms d-flex"
                data-aos="fade-right"
                data-aos-duration="2000">
                <img src={icon3} alt="" />
                <p>
                  {aboutData.philosophy?.[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- philosophy part end -->

     <!-- eco friendly part start --> */}
    </>
  );
}

export default Aboutsec
