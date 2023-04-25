import React from 'react'
import './facility.css'
import fac1 from '../../assets/svg/fac1.svg'
import fac2 from '../../assets/svg/fac2.svg'
import fac3 from '../../assets/svg/fac3.svg'
import fac4 from '../../assets/svg/fac4.svg'
const Facilities = () => {
  return (
    <section id="friendly_part">
            <div className="container">
                <div className="col-lg-10 offset-1 friendly_gap" data-aos="fade-right">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="card_item">
                                <div className="card_top">
                                    <img src={fac4} alt="" srcset=""/>
                                    <h5>Eco-Friendly</h5>
                                </div>
                                <div className="card_bottom">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card_item">
                                <div className="card_top">
                                    <img src={fac1} alt="" srcset=""/>
                                    <h5>Client Satisfaction</h5>
                                </div>
                                <div className="card_bottom">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card_item">
                                <div className="card_top">
                                    <img src={fac2} alt="" srcset=""/>
                                    <h5>Innovation</h5>
                                </div>
                                <div className="card_bottom">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card_item">
                                <div className="card_top">
                                    <img src={fac3} alt="" srcset=""/>
                                    <h5>Smart Home</h5>
                                </div>
                                <div className="card_bottom">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Facilities
