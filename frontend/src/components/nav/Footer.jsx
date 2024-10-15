import React from 'react'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
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
                    </div>

                </div>
            </footer>
  )
}

export default Footer
