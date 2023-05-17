import React, { useEffect, useState } from 'react';
import "./projectDetails.css"
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import location_icon from "../../../assets/svg/flat1.svg"
import bed from "../../../assets/svg/flat2.svg";
import garage from "../../../assets/svg/flat5.svg";
import baseURL from '../../../utils/baseURL';
import { FaChessBoard, FaMapMarkedAlt } from 'react-icons/fa';
import { BiArea, BiUnite } from 'react-icons/bi'
import { GiUndergroundCave } from 'react-icons/gi'
import { SiSalesforce } from 'react-icons/si';
import storeysLogo from '../../../assets/svg/storeys.svg'

const ProjectDetails = () => {

    const [isMagnifierActive, setIsMagnifierActive] = useState(false);
    const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = (event) => {
        setIsMagnifierActive(true);
        setMagnifierPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeave = () => {
        setIsMagnifierActive(false);
    };

    const handleMouseMove = (event) => {
        setMagnifierPosition({ x: event.clientX, y: event.clientY });
    };


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
        autoplaySpeed: 5000,
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
                                            <div
                                                className="image-container"
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                                onMouseMove={handleMouseMove}
                                            >
                                                <img src={e} alt="" />


                                            </div>
                                            {isMagnifierActive && (
                                                <div className="magnifier" style={{ left: magnifierPosition.x, top: magnifierPosition.y }}>
                                                    <img src={e} alt="" />
                                                </div>
                                            )}
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
                                <div class="d-flex product_Items1 product_item2">
                                    <FaMapMarkedAlt
                                        size={26}
                                        className='project_details_icons' />
                                    <a href={singlePropertyData?.loc_url} target={'_blank'}>View in Google Maps</a>
                                    {/* <p>{singlePropertyData?.loc_url}</p> */}
                                </div>
                                <div class="product_item2 d-flex ">
                                    <div class="product_2sitem">
                                        <img className='project_details_icons' src={storeysLogo} alt="" />
                                        <span>{singlePropertyData.storeys} Storeys</span>
                                    </div>
                                    <div class="product_2item">
                                        <BiArea className='project_details_icons' />
                                        <span>{singlePropertyData.area} Area</span>
                                    </div>
                                </div>
                                <div class="product_item2 d-flex ">
                                    <div class="product_2sitem">
                                        <FaChessBoard className='project_details_icons' />
                                        <span>{singlePropertyData.floor} Sqft</span>
                                    </div>
                                    <div class="product_2item">
                                        <BiUnite className="project_details_icons" />
                                        <span>{singlePropertyData.units} Units</span>
                                    </div>
                                </div>
                                <div class="product_item2  d-flex ">
                                    <div class="product_2sitem product_middle">
                                        <GiUndergroundCave className="project_details_icons" />
                                        <span>{singlePropertyData.basement?.toString()}</span>
                                    </div>
                                    <div class="product_2item">
                                        <img className='project_details_icons' src={garage} alt="" />
                                        <span>{singlePropertyData.parking?.toString()}</span>
                                    </div>
                                </div>
                                <div class="product_last">
                                    <SiSalesforce
                                        className='project_details_icons' />
                                    <span>{singlePropertyData.sales} Sales</span>
                                </div>
                                <div class="product_btn">
                                    <Link to={'/contact'}>Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <h5>{singlePropertyData.description}</h5>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectDetails;