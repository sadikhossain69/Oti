import React from 'react';
import pic from '../../../assets/image/banner.jpeg'
import { slideData } from './slideData';
import SingleSlide from './SingleSlide';
import './banner.css'

const Caro2 = () => {
    return (
        <>
            <section>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {
                            slideData.map(e => <SingleSlide 
                                key={e.id}
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