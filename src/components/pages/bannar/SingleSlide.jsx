import React from 'react';

const SingleSlide = ({ signleSlide }) => {

    const { title, description, banner, _id} = signleSlide

    return (
        <>
            <div className={`carousel-item active`}>
                <section
                    id="banner_part" >
                    <img className='banner_bg_img' src={banner} alt="" />
                    <div className="container">
                        <div className="col-lg-6">
                            <div className="banner_content" data-aos="fade-up">
                                <h1>
                                    {title}
                                </h1>
                                <p>
                                    {description}
                                </p>
                                <a href='#' >See more</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default SingleSlide;