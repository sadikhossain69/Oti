import React from 'react';

const SingleSlide = ({ signleSlide }) => {

    const { slideDetail, slideDetailLink, slideHeader, slideBgImage, id } = signleSlide

    return (
        <>
            <div className={`carousel-item ${id === 1 && 'active'}`}>
                <section
                    id="banner_part" >
                    <img className='banner_bg_img' src={slideBgImage} alt="" />
                    <div className="container">
                        <div className="col-lg-6">
                            <div className="banner_content" data-aos="fade-up">
                                <h1>
                                    {slideHeader}
                                </h1>
                                <p>
                                    {slideDetail}
                                </p>
                                <a href={slideDetailLink}>See more</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default SingleSlide;