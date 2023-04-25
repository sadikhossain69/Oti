import React, { useState } from 'react'
import './counter.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const Counter = () => {

  const [isInViewport, setIsInViewport] = useState(false);

  return (
    <section id="learning_builder">
      <div className="container">
        <div className="col-lg-8 offset-2 learninggap" data-aos="fade-up">
          <div className="learning_header">
            <h4>The leading Builder of Comfortable Homes</h4>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="learning_right">
                <ScrollTrigger onEnter={() => setIsInViewport(true)} onExit={() => setIsInViewport(false)}>
                  {
                    isInViewport &&
                    <h5>
                      <CountUp
                        start={0}
                        end={6000}
                        duration={2.75}
                      />
                      <span>+</span>
                    </h5>
                  }
                </ScrollTrigger>
                <h6>Happy Families</h6>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="learning_right">
              <ScrollTrigger onEnter={() => setIsInViewport(true)} onExit={() => setIsInViewport(false)}>
                  {
                    isInViewport &&
                    <h5>
                      <CountUp
                        start={0}
                        end={6000}
                        duration={2.75}
                      />
                      <span>+</span>
                    </h5>
                  }
                </ScrollTrigger>
                <h6>Happy Clints</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter
