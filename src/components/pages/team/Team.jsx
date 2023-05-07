import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import './team.css'
import baseURL from '../../../utils/baseURL';

const Team = () => {

  const [teamData, setTeamData] = useState([])

  const getTeamData = async () => {
    const { data } = await baseURL('/team/list')

    setTeamData(data.data)
  }

  useEffect(() => {
    getTeamData()
  }, [])

  return (
    <section id="our_success" data-aos="fade-up">
      <div class="container">
        <div class="success_header">
          <h2>Our Expert Team</h2>
        </div>
        {
          teamData.map(e =>
            <>
              <div class="col-lg-10 offset-1 success_margin" key={e._id}>
                <div class="success_main">
                  <div class="row">
                    <div class="col-lg-4 col-md-5">
                      <div class="success_img">
                        <img src={e.profile} alt="" srcset="" />
                      </div>
                    </div>
                    <div class="col-lg-8 col-md-7">
                      <div class="success_content">
                        <h4>{e.name}</h4>
                        <h5>{e.designation}</h5>
                        {/* <h6>MSc in Civil Engineering,BUET</h6> */}
                        <p>
                          {e.description}
                        </p>
                        <div class="success_icon">
                          <a href={e.social.facebook}>
                            <FaFacebook className="icon"></FaFacebook>
                          </a>
                          <a href={`${e.social.instagram}`}>
                            <FaInstagram className="icon"></FaInstagram>
                          </a>
                          <a href={e.social.linkedin}>
                            <FaLinkedin className="icon"></FaLinkedin>
                          </a>
                          <a href={e.social.twitter}>
                            <FaTwitter className="icon"></FaTwitter>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        }
        
      </div>
    </section>
  );
}

export default Team
