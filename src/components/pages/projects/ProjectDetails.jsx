import React, { useEffect, useState } from 'react';
import "./projectDetails.css"
import { Link, useParams } from 'react-router-dom';
import product_banner from "../../../assets/image/product_banner.png"
import Slider from 'react-slick';
import location_icon from "../../../assets/svg/flat1.svg"
import bed from "../../../assets/svg/flat2.svg";
import bath from "../../../assets/svg/flat3.svg";
import Area from "../../../assets/svg/flat4.svg";
import garage from "../../../assets/svg/flat5.svg";
import baseURL from '../../../utils/baseURL';

const ProjectDetails = () => {

    const { id } = useParams()
    const [singlePropertyData, setSinglePropertyData] = useState({})

    useEffect(() => {

        const getSinglePropertyData = async () => {
            const { data } = await baseURL.get(`/property/read/${id}`)
            setSinglePropertyData(data.data)
            console.log(data)
        }

        getSinglePropertyData()
    }, [id])

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
                        <div class="col-lg-4 col-md-5">
                            <Slider {...settings}>
                                {
                                    singlePropertyData.properties?.map(e => <>
                                        <div class="product_left" key={e._id}>
                                            <img src={e} alt="" srcset="" />
                                        </div>
                                    </>)
                                }
                            </Slider>
                        </div>
                        <div class="col-lg-8 col-md-7">
                            <div class="product_right">
                                <h4>{singlePropertyData.name}</h4>
                                <h3>{singlePropertyData.type}</h3>
                                <div class="d-flex product_Items1">
                                    <img className='project_details_icons' src={location_icon} alt="" />
                                    <p>{singlePropertyData.location}</p>
                                </div>
                                <div class="product_item2 d-flex ">
                                    <div class="product_2sitem">
                                        <img className='project_details_icons' src={bed} alt="" />
                                        <span>{singlePropertyData.storeys} Storeys</span>
                                    </div>
                                    <div class="product_2item">
                                        <img className='project_details_icons' src={bath} alt="" />
                                        <span>{singlePropertyData.area} Area</span>
                                    </div>
                                </div>
                                <div class="product_item2 d-flex ">
                                    <div class="product_2sitem">
                                        <img className='project_details_icons' src={bed} alt="" />
                                        <span>{singlePropertyData.floor} Floor</span>
                                    </div>
                                    <div class="product_2item">
                                        <img className='project_details_icons' src={bath} alt="" />
                                        <span>{singlePropertyData.units} Units</span>
                                    </div>
                                </div>
                                <div class="product_item2  d-flex ">
                                    <div class="product_2sitem product_middle">
                                        <img className='project_details_icons' src={Area} alt="" />
                                        <span>{singlePropertyData.basement?.toString()} Basement</span>
                                    </div>
                                    <div class="product_2item">
                                        <img className='project_details_icons' src={garage} alt="" />
                                        <span>{singlePropertyData.parking?.toString()} Parking</span>
                                    </div>
                                </div>
                                <div class="product_last">
                                    <img className='project_details_icons' src={garage} alt="" />
                                    <span>{singlePropertyData.sales} Sales</span>
                                </div>
                                <div class="product_btn">
                                    <Link to={'/contact'}>Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <h5>{singlePropertyData.description}</h5>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectDetails;