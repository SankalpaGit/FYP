import React from 'react';

const Testimonial = () => {
    const testimonials = [
        {
            text: "Chikitsakalaya has made my healthcare appointments much easier. The platform is intuitive, and the consultation process was smooth.",
            author: "Sankalpa Shrestha",
            role: "Patient",
        },
        {
            text: "The ability to connect with doctors instantly has been life-changing. I highly recommend Chikitsakalaya to anyone seeking fast appointments.",
            author: "Inshika Rana",
            role: "Patient",
        },
        {
            text: "As a doctor, this platform has helped me manage my appointments and communicate with patients more efficiently. It's a great tool.",
            author: "Dr. Himani Ghimire",
            role: "Physician",
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-50">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-teal-700 mb-10">What Our Users Say</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <p className="text-gray-700 text-lg mb-4">{testimonial.text}</p>
                            <div className="mt-4">
                                <p className="font-bold text-teal-600">{testimonial.author}</p>
                                <p className="text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
