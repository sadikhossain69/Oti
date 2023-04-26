import React from 'react';
import "./projectDetails.css"
import { useParams } from 'react-router-dom';
import product_banner from "../../../assets/image/product_banner.png"

const ProjectDetails = () => {

    const { id } = useParams()

    return (
        <>
            <section id="product_part">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-5">
                            <div class="product_left">
                                <img src={product_banner} alt="" srcset="" />
                            </div>

                        </div>
                        <div class="col-lg-6 col-md-7">
                            <div class="product_right">
                                <h4>Project shopno</h4>
                                <h3>Green Valley</h3>
                                <div class="d-flex product_Items1">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <p>Mohammadpur Block D
                                        Dahka</p>
                                </div>
                                <div class="product_item2 d-flex ">
                                    <div class="product_2sitem">
                                        <i class="fa-solid fa-bed"></i>
                                        <span>3 Beds</span>
                                    </div>
                                    <div class="product_2item">
                                        <i class="fa-solid fa-bath"></i>
                                        <span>3 Baths</span>
                                    </div>
                                </div>
                                <div class="product_item2  d-flex ">
                                    <div class="product_2sitem product_middle">
                                        <i class="fa-solid fa-bed"></i>
                                        <span>1200sqft</span>
                                    </div>
                                    <div class="product_2item">
                                        <i class="fa-solid fa-car"></i>
                                        <span>Car parking</span>
                                    </div>
                                </div>
                                <div class="product_last">
                                    <i class="fa-solid fa-compass"></i>
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