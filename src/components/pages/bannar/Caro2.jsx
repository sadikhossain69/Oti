import React, { useEffect, useState } from 'react';
import pic from '../../../assets/image/banner.jpeg'
import { slideData } from './slideData';
import SingleSlide from './SingleSlide';
import './banner.css'
import baseURL from '../../../utils/baseURL';

const Caro2 = () => {

    const [bannerData, setBannerData] = useState([])

    const getBannerData = async () => {
        const { data } = await baseURL.get('/banner/list')
        console.log(data)
    }

    useEffect(() => {
        getBannerData()
    }, [])

    return (
        <>
            <section>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {
                            bannerData?.map(e => <SingleSlide
                                key={e._id}
                                signleSlide={e}
                            />)
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Caro2;