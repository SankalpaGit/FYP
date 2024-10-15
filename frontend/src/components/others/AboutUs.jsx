import React from 'react'

const AboutUs = () => {
  return (
    <>
        
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
    </>
  )
}

export default AboutUs
