// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">GILITU ENTERPRISES LIMITED</h2>
          <ul className="text-sm">
            <li>P.O.Box 728</li>
            <li>Buhangija, Shinyanga, Tanzania</li>
            <li>Phone: +255 784765596</li>
            <li>Email: info@gilitu.co.tz</li>
          </ul>
          <div className="mt-5 flex space-x-4">
            <a href="https://www.instagram.com/gilitu_enterprises_ltd/"><FaInstagram /></a>
          </div>
        </div>

        {/* Our Products */}
        <div>
          <h2 className="text-lg font-semibold mb-2">OUR PRODUCTS</h2>
          <ul className="text-sm space-y-1">
            <li><a href="/products/sanico">Sanico Sunflower oil</a></li>
            <li><a href="/products/sanfit">Sanfit Sunflower oil</a></li>
            <li><a href="/products/maize">Sanico Maize flour</a></li>
            <li><a href="/products/rice">Sanico Rice</a></li>
            <li><a href="/products/soap">Sanico Bar Soap</a></li>
            <li><a href="/products/doc">De-oiled cake</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-lg font-semibold mb-2">OUR SERVICES</h2>
          <ul className="text-sm space-y-1">
            <li><a href="/services/filling">Filling Station</a></li>
            <li><a href="/services/logistics">Logistic and transport</a></li>
            <li><a href="/services/weightbridgePage">WeightBridge</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">USEFUL LINKS</h2>
          <ul className="text-sm space-y-1">
            <li><a href="/about">About Us</a></li>
            <li><a href="/contactpage">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-20 border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
        <p className="mb-2 font-medium">
          Website developed and maintained by <span className="text-sky-700 font-semibold">Gilitu Enterprises Limited</span>
        </p>
        <p className="text-xs text-white">
          © {new Date().getFullYear()} Gilitu Enterprises Limited – All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
