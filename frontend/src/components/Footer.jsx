import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Gantabya</h3>
            <p className="text-blue-200">
              Your reliable ride-sharing partner for safe and comfortable journeys.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-200">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-200">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-200">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-200">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/riding" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Book a Ride
                </Link>
              </li>
              <li>
                <Link to="/captain-home" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Become a Captain
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-blue-200">Email: support@gantabya.com</li>
              <li className="text-blue-200">Phone: +1 234 567 890</li>
              <li className="text-blue-200">Address: Kathmandu, Nepal</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200">
              &copy; {new Date().getFullYear()} Gantabya. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <span className="text-blue-200">Created by:</span>
              <a 
                href="mailto:nirajan.acharya666@gmail.com" 
                className="text-white hover:text-blue-300 transition-colors duration-200 flex items-center"
              >
                Nirajan Acharya
                <FaGithub className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 