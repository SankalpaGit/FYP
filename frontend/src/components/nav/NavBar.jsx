import React from 'react'
import { useState, useEffect } from "react";

const NavBar = () => {

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
  )
}

export default NavBar
