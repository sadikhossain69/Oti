import React from 'react'
import './counter.css'
const Counter = () => {
  return (
    <section id="learning_builder">
      <div className="container">
        <div className="col-lg-8 offset-2 learninggap" data-aos="fade-up">
          <div className="learning_header">
            <h4>The leading Builder of Comfortable Homes</h4>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="learning_left">
                <h5>
                  2,000 <span>+</span>
                </h5>
                <h6>Dedicated Personal</h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="learning_right">
                <h5>
                  6,000 <span>+</span>
                </h5>
                <h6>Happy Families</h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="learning_right">
                <h5>
                  3,000 <span>+</span>
                </h5>
                <h6>Happy Families</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter
