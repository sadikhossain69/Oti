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
        setBannerData(data)
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
                        {/* {
                            bannerData?.map(e => <SingleSlide
                                key={e._id}
                                signleSlide={e}
                            />)
                        } */}
                        {bannerData[0] && <SingleSlide key={bannerData[0]._id} signleSlide={bannerData[0]} activeBanner={"active"}/>}
                        {bannerData[1] && <SingleSlide key={bannerData[1]._id} signleSlide={bannerData[1]}/>}
                        {bannerData[2] && <SingleSlide key={bannerData[2]._id} signleSlide={bannerData[2]}/>}
                        {bannerData[3] && <SingleSlide key={bannerData[3]._id} signleSlide={bannerData[3]}/>}
                        {bannerData[4] && <SingleSlide key={bannerData[4]._id} signleSlide={bannerData[4]}/>}
                        {bannerData[5] && <SingleSlide key={bannerData[5]._id} signleSlide={bannerData[5]}/>}
                        {bannerData[6] && <SingleSlide key={bannerData[6]._id} signleSlide={bannerData[6]}/>}
                        {bannerData[7] && <SingleSlide key={bannerData[7]._id} signleSlide={bannerData[7]}/>}
                        {bannerData[8] && <SingleSlide key={bannerData[8]._id} signleSlide={bannerData[8]}/>}
                        {bannerData[9] && <SingleSlide key={bannerData[9]._id} signleSlide={bannerData[9]}/>}
                        {bannerData[10] && <SingleSlide key={bannerData[10]._id} signleSlide={bannerData[10]}/>}
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