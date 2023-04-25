import React from 'react'
import './contact.css'
const contact = () => {
  return (
    <section id="contact_part">
      <div class="container">
        <div class="col-lg-10 offset-1 contact_mars" data-aos="fade-up">
          <div class="contact_banner">
            <div class="col-lg-6 offset-3 input_mars">
              <div class="contact_item">
                <div class="contact_inputs">
                  <label for="Your Name">Your Name</label>
                  <input type="text" />
                </div>
                <div class="contact_inputs">
                  <label for="Your Email">Your Email</label>
                  <input type="text" />
                </div>
                <div class="contact_inputs">
                  <label for="Your Number">Your Number</label>
                  <input type="text" />
                </div>
                <div class="contact_textarea">
                  <label for="Your Message">Your Message</label>
                  <textarea name="" id="" cols="30" rows="4"></textarea>
                </div>
                <div class="contact_inputs">
                  <a href="/contact">
                    <button>Submit</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default contact

