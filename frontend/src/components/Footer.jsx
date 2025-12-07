import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50  mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
          
          {/* Left section */}
          <div className="col-span-2">
            <h1 className="text-3xl font-bold text-pink-500 mb-4 cursor-pointer">
              PulseCare
            </h1>
            <p className="text-gray-600 leading-6 max-w-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5 text-xl text-pink-500">
              <FaFacebook className="cursor-pointer hover:text-pink-600" />
              <FaInstagram className="cursor-pointer hover:text-pink-600" />
              <FaTwitter className="cursor-pointer hover:text-pink-600" />
              <FaLinkedin className="cursor-pointer hover:text-pink-600" />
            </div>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-xl font-semibold mb-5">Company</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li className="hover:text-pink-500 cursor-pointer">Home</li>
              <li className="hover:text-pink-500 cursor-pointer">About Us</li>
              <li className="hover:text-pink-500 cursor-pointer">Contact Us</li>
              <li className="hover:text-pink-500 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <p className="text-xl font-semibold mb-5">Get In Touch</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li className="hover:text-pink-500 cursor-pointer">
                +1-212-456-7890
              </li>
              <li className="hover:text-pink-500 cursor-pointer">
                pulsecare247@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10">
          <hr className="border-pink-300" />
          <p className="py-5 text-sm text-center text-gray-600">
            © 2025 PulseCare — All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
