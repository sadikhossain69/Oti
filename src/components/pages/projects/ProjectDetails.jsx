import React from 'react';
import "./projectDetails.css"
import { useParams } from 'react-router-dom';
import product_banner from "../../../assets/image/product_banner.png"
import Slider from 'react-slick';
import location_icon from "../../../assets/svg/flat1.svg"
import bed from "../../../assets/svg/flat2.svg";
import bath from "../../../assets/svg/flat3.svg";
import Area from "../../../assets/svg/flat4.svg";
import garage from "../../../assets/svg/flat5.svg";

const ProjectDetails = () => {

    const { id } = useParams()

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToScroll: 1,
    };

    return (
        <>
            <section id="product_part">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-5">
                            <Slider {...settings}>
                                <div class="product_left">
                                    <img src={product_banner} alt="" srcset="" />
                                </div>
                                <div class="product_left">
                                    <img src={product_banner} alt="" srcset="" />
                                </div>
                                <div class="product_left">
                                    <img src={product_banner} alt="" srcset="" />
                                </div>

                            </Slider>
                        </div>
                        <div class="col-lg-6 col-md-7">
                            <div class="product_right">
                                <h4>Project shopno</h4>
                                <h3>Green Valley</h3>
                                <div class="d-flex product_Items1">
                                    <img className='project_details_icons' src={location_icon} alt="" />
                                    <p>Mohammadpur Block D
                                        Dahka</p>
                                </div>
                                <div class="product_item2 d-flex ">
                                    <div class="product_2sitem">
                                        <img className='project_details_icons' src={bed} alt="" />
                                        <span>3 Beds</span>
                                    </div>
                                    <div class="product_2item">
                                        <img className='project_details_icons' src={bath} alt="" />
                                        <span>3 Baths</span>
                                    </div>
                                </div>
                                <div class="product_item2  d-flex ">
                                    <div class="product_2sitem product_middle">
                                        <img className='project_details_icons' src={Area} alt="" />
                                        <span>1200sqft</span>
                                    </div>
                                    <div class="product_2item">
                                        <img className='project_details_icons' src={garage} alt="" />
                                        <span>Car parking</span>
                                    </div>
                                </div>
                                <div class="product_last">
                                    <img className='project_details_icons' src={garage} alt="" />
                                    <span>South facing</span>
                                </div>
                                <div class="product_btn">
                                    <a href="#">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectDetails;