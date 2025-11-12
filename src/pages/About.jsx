import React from "react";
import { motion } from "framer-motion";
import boss from '../assets/boss.png'
import bic from '../assets/Gilitulg.png';
import cup from '../assets/cup.png';



const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white text-gray-800 p-4 sm:p-6 md:p-8 lg:p-16 space-y-12">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
          About Gilitu Enterprises Limited
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
          Building sustainable agriculture through innovation, quality, and community empowerment.
        </p>
      </motion.div>

      {/* Short History Section */}
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-700 mb-4">Our Story</h2>
          <p className="text-base sm:text-lg text-gray-700">
            Gilitu Enterprises Limited is a dynamic and rapidly expanding agro-processing company based in Buhangija, Shinyanga Municipal, Tanzania. Incorporated on January 9, 2018, the company holds Certificate of Incorporation number 140365 issued by BRELA under the United Republic of Tanzania.
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            We specialize in the processing and distribution of seed oil products and by-products including high-quality sunflower oil and seed cakes, cotton cooking oil and cakes. We also source and distribute grain mills such as maize and rice, and produce dish-washing soaps.
          </p>
        </div>
        <div>
          <img src={bic} alt="Gilitu facility" className="w-full rounded-2xl shadow-2xl border-4 border-yellow-100" />
        </div>
      </motion.div>

      {/* Managing Director Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="bg-white border-l-8 border-yellow-400 shadow-lg p-6 sm:p-8 rounded-2xl text-center max-w-4xl mx-auto"
      >
        <img src={boss} alt="Managing Director" className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full mx-auto mb-4 border-4 border-yellow-200 shadow-md" />
        <h3 className="text-xl sm:text-2xl font-bold text-yellow-700 mb-2">Words from Our Managing Director</h3>
        <p className="text-base sm:text-lg text-gray-700">
          "At Gilitu Enterprises, we are committed to innovation, sustainability, and delivering quality agro-products that empower our communities and elevate agricultural standards across Tanzania. Thank you for being part of our journey."
        </p>
        <p className="mt-4 font-semibold text-gray-800 text-sm sm:text-base">- Managing Director, Gilitu Enterprises Ltd.</p>
      </motion.div>

      {/* Mission & Vision */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        className="bg-yellow-100 text-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-yellow-700">Our Vision</h3>
            <p className="text-base">
              To be the leading supplier of innovative milling products and contribute to a robust and sustainable agricultural ecosystem.
            </p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-yellow-700">Our Mission</h3>
            <p className="text-base">
              To source and distribute high-quality grain mills and raw materials to meet the diverse needs of our clients.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Core Values */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-yellow-700">Core Values</h3>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-700">
          <li>Quality</li>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Sustainability</li>
          <li>Customer-centricity</li>
        </ul>
      </motion.div>

      {/* Recognition Section */}
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <img src={cup} alt="Awards and Recognition" className="w-full rounded-2xl shadow-2xl border-4 border-yellow-100" />
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-yellow-700">Awards & Recognition</h3>
          <p className="text-base sm:text-lg text-gray-700">
            Gilitu Enterprises has been recognized for excellence in sunflower oil production, sustainable agro-processing, and community empowerment. We have received the TRA Best Taxpayer Awards, TCCIA Winner Awards, SHUWASA Awards, and several honors from industry authorities.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
