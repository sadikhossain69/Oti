import React from 'react';

const SingleSlide = ({ signleSlide }) => {

    const {slideDetail, slideDetailLink, slideHeader} = signleSlide
    
    return (
        <>
            <section
                id="banner_part" >
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
        </>
    );
};

export default SingleSlide;