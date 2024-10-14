import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'

const LandingPage = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="font-sans">
            {/* Hero Section */}
            <section className="relative w-full h-screen flex justify-center items-center overflow-hidden">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="https://videocdn.cdnpk.net/videos/e4b68020-95ae-4255-9123-3d638ba9ec98/horizontal/previews/clear/large.mp4?token=exp=1728876479~hmac=4f34c1232ccb522cd80dd0dfbebf0141362cb5d1bd6a0b0b0c1a39ea81574901" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black opacity-35"></div>

                {/* Overlay and Content */}
                <div className="relative z-10 p-8 rounded-lg text-center px-4 animate-fadeInUp">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-100 animate-slideInLeft">
                        Welcome to Chikitsakalaya
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-100 hover:font-semibold animate-slideInRight">
                        Nepal's most trusted platform for seamless doctor appointments and consultations.
                    </p>
                    <a
                        href="#about"
                        className="mt-6 inline-block px-8 py-3 bg-teal-700 text-gray-100 rounded-md hover:bg-teal-600 transition duration-500 ease-in-out transform hover:scale-105 animate-bounceIn"
                    >
                        Learn More
                    </a>
                </div>
            </section>



            {/* Sticky Navbar */}
            <nav
                className={`w-full z-50 transition-all duration-300 ${isSticky ? "fixed top-0 bg-white shadow-md" : ""
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold text-teal-700">Chikitsakalaya</div>
                    <div className="space-x-6">
                        <a href="#about" className="text-gray-800 hover:text-teal-700">
                            About Us
                        </a>
                        <a href="#features" className="text-gray-800 hover:text-teal-700">
                            Features
                        </a>
                        <a href="#pricing" className="text-gray-800 hover:text-teal-700">
                            Pricing
                        </a>
                        <a href="#contact" className="text-gray-800 hover:text-teal-700">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>

            {/* About Us Section */}
            <section id="about" className="relative py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
                    {/* Image Section */}
                    <div className="lg:w-1/2 lg:mb-0 ">
                        <img
                            src="./landingWWR.jpg"
                            alt="About Us"
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
                        <h2 className="text-4xl font-bold text-teal-700">
                            Who We Are
                        </h2>
                        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                            At <span className="font-bold text-teal-600">Chikitsakalaya</span>, we’re committed to revolutionizing healthcare access in Nepal. Our platform allows patients to quickly and efficiently book appointments, consult online, and connect with healthcare professionals.
                        </p>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            We aim to bridge the gap between patients and doctors, ensuring a smooth and hassle-free healthcare experience.
                        </p>

                        {/* Add Subtle Icons for Focus Points */}
                        <div className="mt-8 space-y-4">
                            <div className="flex items-center">
                                <svg className="h-6 w-6 text-teal-700 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 00-2 0v3a1 1 0 102 0V6zM9 10a1 1 0 102 0H9z" clipRule="evenodd" />
                                </svg>
                                <p className="text-gray-700">Book appointments in just a few clicks</p>
                            </div>
                            <div className="flex items-center">
                                <svg className="h-6 w-6 text-teal-700 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 8h10a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V9a1 1 0 011-1zm6 3a2 2 0 11-4 0 2 2 0 014 0zM2 9a2 2 0 112-2 2 2 0 01-2 2z" clipRule="evenodd" />
                                </svg>
                                <p className="text-gray-700">Consult online from the comfort of your home</p>
                            </div>
                            <div className="flex items-center">
                                <svg className="h-6 w-6 text-teal-700 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 00-1 1v3a1 1 0 102 0V6h3a1 1 0 100-2H4zm14 12a1 1 0 001-1v-3a1 1 0 10-2 0v2h-3a1 1 0 100 2h4z" clipRule="evenodd" />
                                </svg>
                                <p className="text-gray-700">Connect with highly-qualified doctors instantly</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-50">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-teal-700">Our Features</h2>
                        <ul className="mt-6 space-y-4 text-gray-700 text-lg">
                            <li>✓ Easy and Fast Appointment Booking</li>
                            <li>✓ Medical Report OCR & profile generation</li>
                            <li>✓ Doctor Recommendations Based on Reports</li>
                            <li>✓ Secure Payment Integration (Powered by Stripe)</li>
                            <li>✓ Chat and Video Consultation</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <img
                            src="./landFeature.png"
                            alt="Features illustration"
                            className="rounded-lg "
                        />
                    </div>
                </div>
            </section>

            {/* Payment Section */}
            <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-teal-700">Payment Options</h2>
                    <p className="mt-4 text-gray-700">
                        We integrate with <span className="font-bold">Stripe</span> for secure and
                        hassle-free payment processing. Book appointments and consult with doctors
                        without any worry.
                    </p>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGZVxQZ2UYa4aZMO1u_hgQPt-OVvqLq5MnoA&s"
                        alt="Stripe logo"
                        className="mx-auto mt-6"
                    />
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-teal-700">
                        What Our Users Say
                    </h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 shadow-md rounded-lg">
                            <p className="text-gray-700">
                                "Chikitsakalaya has made my healthcare appointments much easier.
                                The platform is intuitive, and the consultation process was smooth."
                            </p>
                            <p className="mt-4 font-bold text-teal-700">- Sarah, Patient</p>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded-lg">
                            <p className="text-gray-700">
                                "The ability to connect with doctors instantly has been life-changing.
                                I highly recommend Chikitsakalaya to anyone seeking fast appointments."
                            </p>
                            <p className="mt-4 font-bold text-teal-700">- John, Patient</p>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded-lg">
                            <p className="text-gray-700">
                                "As a doctor, this platform has helped me manage my appointments
                                and communicate with patients more efficiently. It's a great tool."
                            </p>
                            <p className="mt-4 font-bold text-teal-700">- Dr. Emma, Physician</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-teal-700">Contact Us</h2>
                    <p className="mt-4 text-center text-gray-700">
                        Got questions? Feel free to reach out. We’d love to hear from you.
                    </p>
                    <div className="mt-8 flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-8">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-700">Email</h3>
                            <p className="text-gray-500">support@chikitsakalaya.com</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-700">Phone</h3>
                            <p className="text-gray-500">+123-456-7890</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-teal-50 py-8 text-gray-700">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Column 1 */}
                        <div>
                            <h4 className="font-bold mb-4">Company</h4>
                            <ul>
                                <li className="mb-2">
                                    <a href="#about" className="text-gray-700 hover:text-teal-700 hover:font-semibold">
                                        About Us
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#features" className="text-gray-700 hover:text-teal-700 hover:font-semibold">
                                        Features
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#pricing" className="text-gray-700 hover:text-teal-700 hover:font-semibold">
                                        Pricing
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#contact" className="text-gray-700 hover:text-teal-700 hover:font-semibold">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h4 className="font-bold mb-4">Resources</h4>
                            <ul>
                                <li className="mb-2">
                                    <a href="#faq" className="text-gray-700 hover:text-teal-700 hover:font-semibold">
                                        FAQ
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#blog" className="text-gray-700 hover:text-teal-700 hover:font-semibold">
                                        Blog
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#privacy" className="text-gray-700 hover:text-teal-700 hover:font-semibold">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#terms" className="text-gray-700 hover:text-teal-700 hover:font-semibold">
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <h4 className="font-bold mb-4">Support</h4>
                            <ul>
                                <li className="mb-2">
                                    <a href="#support" className="text-gray-700 hover:text-teal-700 hover:font-semibold">
                                        Customer Support
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#feedback" className="text-gray-700 hover:text-teal-700 hover:font-semibold">
                                        Feedback
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#careers" className="text-gray-700 hover:text-teal-700 hover:font-semibold">
                                        Careers
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#contact" className="text-gray-700 hover:text-teal-700 hover:font-semibold">
                                        Contact Support
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div>
                            <h3 className="text-lg font-bold">Follow Us</h3>
                            <div className="mt-2 flex flex-col items-start ">
                                <a href="https://facebook.com" className="flex items-center hover:text-teal-700 hover:font-semibold mb-2">
                                    <FaFacebook className="mr-2" /> Facebook
                                </a>
                                <a href="https://twitter.com" className="flex items-center hover:text-teal-700 hover:font-semibold  mb-2">
                                    <FaTwitter className="mr-2" /> Twitter
                                </a>
                                <a href="https://instagram.com" className="flex items-center hover:text-teal-700 hover:font-semibold  mb-2">
                                    <FaInstagram className="mr-2" /> Instagram
                                </a>
                                <a href="https://linkedin.com" className="flex items-center hover:text-teal-700 hover:font-semibold  mb-2">
                                    <FaLinkedin className="mr-2" /> LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright and Payment Options */}
                    <div className="mt-8 border-t border-gray-200 pt-4 text-center">
                        <p className="text-sm">© 2024 Chikitsakalaya. All Rights Reserved.</p>
                        <p>Payment Partner <span className="font-bold text-purple-600">Stripe</span> </p>
                    </div>

                </div>
            </footer>


        </div>
    );
};

export default LandingPage;
