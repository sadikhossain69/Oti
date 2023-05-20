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
                <h2 className='text-center font-weight-bold'>The Features We Follow</h2>
                <div className="col-lg-10 offset-1 friendly_gap" data-aos="fade-right">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="card_item">
                                <div className="card_top">
                                    <img src={fac4} alt="" srcset=""/>
                                    <h5>Eco-Friendly</h5>
                                </div>
                                <div className="card_bottom">
                                    <p>Friendly homes and viable complexes </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card_item">
                                <div className="card_top">
                                    <img src={fac1} alt="" srcset=""/>
                                    <h5>Satisfaction</h5>
                                </div>
                                <div className="card_bottom">
                                    <p>Assure client satisfaction</p>
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
                                    <p>Innovative structural design for an excellent home </p>
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
                                    <p>Smart life with smart life</p>
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
