import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const ContactUI = () => {
    return (
        <>
            <div className="w-11/12 m-auto mt-14 flex flex-col md:flex-row justify-evenly">
                <div className="md:w-5/12 p-5 text-teal-700">
                    <p className="text-3xl font-bold text-teal-700 mb-4">Connect with Us</p>
                    <p className="text-gray-700">
                        Stay connected and reach out to us through various platforms.
                    </p>
                    <div className="mt-5 space-y-4">
                        <p className="text-xl font-bold text-teal-700 mb-4 underline">Message Us</p>
                        <div>
                            <a href="https://www.instagram.com/chikitsakalaya" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-3xl inline-block mr-2" />
                                <span className="align-middle">Chikitsakalaya</span>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/company/chikitsakalaya" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-3xl inline-block mr-2" />
                                <span className="align-middle">Chikitsakalaya</span>
                            </a>
                        </div>
                        <div>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support@chikitsakalaya.com" target="_blank" rel="noopener noreferrer">
                                <MdOutlineEmail className="text-3xl inline-block mr-2" />
                                <span className="align-middle">support@chikitsakalaya.com</span>
                            </a>
                        </div>
                        <div>
                            <a href="https://wa.me/9771234567890" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="text-3xl inline-block mr-2" />
                                <span className="align-middle">+977-1234567890</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="md:w-6/12 p-5 mt-10 md:mt-0">
                    <p className="text-3xl font-bold text-teal-700 mb-4">Get In Touch</p>
                    <form className="space-y-4">
                        <input
                            type="email"
                            placeholder="example123@gmail.com"
                            className="w-full p-3 border border-teal-600 rounded-md focus:outline-none focus:border-teal-500 placeholder-gray-500 focus:text-teal-700"
                        />
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 border border-teal-600 rounded-md focus:outline-none focus:border-teal-500 placeholder-gray-500 focus:text-teal-700"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-3 border border-teal-600 rounded-md focus:outline-none focus:border-teal-500 placeholder-gray-500 h-32 resize-none focus:text-teal-700"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full md:w-3/12 bg-teal-700 text-white p-3 rounded-md hover:bg-teal-600 font-bold"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ContactUI;
