import React from 'react';
import contactImg from '../../../assets/image/abdur.png'
import './contactPage.css'
import { BsFillTelephoneFill } from 'react-icons/bs'
import {AiFillMail} from 'react-icons/ai'

const ContactPage = () => {
    return (
        <section id='Contact_section'>
            <div className="container contact_section">
                <div className='contact_left'>
                    <img src={contactImg} alt="" />
                    <div className='contact_left_contact_details'>
                        {/* icon */}
                        <div>
                            <BsFillTelephoneFill size={20} color='blue' />
                        </div>
                        {/* details */}
                        <div className='contact_left_text'>
                            <p>Call Anytime</p>
                            <p>01922-090882</p>
                        </div>
                    </div>
                    <div className='contact_left_contact_details'>
                        {/* icon */}
                        <div>
                            <AiFillMail size={20} color='blue'/>
                        </div>
                        {/* details */}
                        <div className='contact_left_text'>
                            <p>Send Email</p>
                            <p>dreamerpropertiesltd@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='contact_right'>
                    <form action="">
                        <div className="contact_input">
                            <label htmlFor="">Name</label>
                            <input type="text" />
                        </div>
                        <div className="contact_input">
                            <label htmlFor="">Email</label>
                            <input type="text" />
                        </div>
                        <div className="contact_input">
                            <label htmlFor="">Number</label>
                            <input type="text" />
                        </div>
                        <div className="contact_input">
                            <label htmlFor="">Description</label>
                            <input type="text" />
                        </div>
                        <input className='submit' type="submit" value={'Get A Quote'} />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;