import React from 'react';
import contactImg from '../../../assets/image/abdur.png'
import './contactPage.css'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiFillMail } from 'react-icons/ai'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

const ContactPage = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const contactSubmit = data => {
        const contactData = {
            name: data.name,
            message: data.message,
            number: data.number,
            email: data.email
        }
        console.log(data)
        emailjs.send('service_kwm6cuf', 'template_6xs2rba', contactData, '0tEH0AfgwZh8JfTLh').then(res => {
            toast.success("Email Sent Successful")
            console.log(res)
            reset()
        }, err => {
            toast.error("Email Sent Failed")
            reset()
        })
    }

    return (
        <section id='Contact_section'>
            <div className="container contact_section">
                <Toaster />
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
                            <AiFillMail size={20} color='blue' />
                        </div>
                        {/* details */}
                        <div className='contact_left_text'>
                            <p>Send Email</p>
                            <p>dreamerpropertiesltd@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='contact_right'>
                    <form onSubmit={handleSubmit(contactSubmit)} action="">
                        <div className="contact_input">
                            <label htmlFor="">Name</label>
                            <input {
                                ...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required"
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Name must be at least 3 characters',
                                    },
                                })
                            } type="text" required />
                            {
                                errors.name?.type === "required"
                                &&
                                <p className='fw-bold text-danger'>
                                    {errors.name.message}
                                </p>
                            }
                            {
                                errors.name?.type === "minLength"
                                &&
                                <p className='fw-bold text-danger'>
                                    {errors.name.message}
                                </p>
                            }
                        </div>
                        <div className="contact_input">
                            <label htmlFor="">Email</label>
                            <input {
                                ...register("email", {
                                    required: {
                                        value: true,
                                        message: "email is Required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Invalid email address',
                                    }
                                })
                            } type="text" required />
                            {errors.email?.type === 'required' && (
                                <p className="fw-bold text-danger">
                                    {errors.email.message}
                                </p>
                            )}
                            {errors.email?.type === 'pattern' && (
                                <p className="fw-bold text-danger">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div className="contact_input">
                            <label htmlFor="">Number</label>
                            <input {
                                ...register("number", {
                                    required: {
                                        value: true,
                                        message: "Number is Required"
                                    },
                                    minLength: {
                                        value: 11,
                                        message: 'Number must be at least 11 characters',
                                    },
                                    pattern: {
                                        value: /^(\+?880|0)1[3-9]\d{8}$/,
                                        message: "Your number is not correct"
                                    }
                                })
                            } type="number" required />
                            {errors.number?.type === 'required' && (
                                <p className="fw-bold text-danger">
                                    {errors.number.message}
                                </p>
                            )}
                            {errors.number?.type === 'minLength' && (
                                <p className="fw-bold text-danger">
                                    {errors.number.message}
                                </p>
                            )}
                            {errors.number?.type === 'pattern' && (
                                <p className="fw-bold text-danger">
                                    {errors.number.message}
                                </p>
                            )}
                        </div>
                        <div className="contact_input">
                            <label htmlFor="">Description</label>
                            <input {
                                ...register("message", {
                                    required: {
                                        value: true,
                                        message: "Description is Required"
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Description must be at least 3 characters',
                                    },
                                })
                            } type="text" />
                            {
                                errors.message?.type === "required"
                                &&
                                <p className='fw-bold text-danger'>
                                    {errors.message.message}
                                </p>
                            }
                            {
                                errors.message?.type === "minLength"
                                &&
                                <p className='fw-bold text-danger'>
                                    {errors.message.message}
                                </p>
                            }
                        </div>
                        <input className='submit' type="submit" value={'Get A Quote'} />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;