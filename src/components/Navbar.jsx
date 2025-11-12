import React, { useState } from 'react';
import bic from '../assets/Gilitulg.png';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const handleNav = (path) => {
    setMenuOpen(false);
    window.location.href = path;
  };

  return (
    <motion.nav
      className="bg-gradient-to-r from-yellow-300 to-yellow-400 shadow-lg sticky top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-30 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={bic} alt="logo" className="w-20 h-20 rounded-full shadow-lg" />
            <span className="text-xl sm:text-2xl font-bold text-gray-800">GILITU ENTERPRISES LTD</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-gray-800">
            <button onClick={() => handleNav('/')} className="hover:text-blue-700 transition">Home</button>
            <button onClick={() => handleNav('/about')} className="hover:text-blue-700 transition">About Us</button>
            <div className="relative group">
              <button className="flex items-center hover:text-blue-700">Products <ChevronDown size={16} className="ml-1" /></button>
              <div className="absolute top-full left-0 w-56 bg-white rounded shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-300 invisible group-hover:visible z-50">
                {['sanico', 'sanfit', 'maize', 'rice', 'soap', 'doc'].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleNav(`/products/${item}`)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1).replace('doc', 'DOC').replace('sanico', 'Sanico Sunflower Oil').replace('sanfit', 'Sanfit Sunflower Oil').replace('maize', 'Maize Flour').replace('rice', 'Rice').replace('soap', 'Soap')}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center hover:text-blue-700">Services <ChevronDown size={16} className="ml-1" /></button>
              <div className="absolute top-full left-0 w-52 bg-white rounded shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-300 invisible group-hover:visible z-50">
                <button onClick={() => handleNav('/services/filling')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Filling Station</button>
                <button onClick={() => handleNav('/services/logistics')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Logistics</button>
                <button onClick={() => handleNav('/services/weightbridgePage')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Weight Bridge</button>
              </div>
            </div>
            <button onClick={() => handleNav('/contactpage')} className="hover:text-blue-700 transition">Contact Us</button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-yellow-200 px-6 py-4 space-y-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <button onClick={() => handleNav('/')} className="block w-full text-left">Home</button>
            <button onClick={() => handleNav('/about')} className="block w-full text-left">About Us</button>

            {/* Mobile Products */}
            <div>
              <button onClick={() => setProductOpen(!productOpen)} className="w-full text-left font-medium">Products</button>
              <div className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${productOpen ? 'max-h-96' : 'max-h-0'}`}>
                {['sanico', 'sanfit', 'maize', 'rice', 'soap', 'doc'].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleNav(`/products/${item}`)}
                    className="block w-full text-left hover:text-blue-600"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1).replace('doc', 'DOC').replace('sanico', 'Sanico Sunflower Oil').replace('sanfit', 'Sanfit Sunflower Oil').replace('maize', 'Maize Flour').replace('rice', 'Rice').replace('soap', 'Soap')}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Services */}
            <div>
              <button onClick={() => setServiceOpen(!serviceOpen)} className="w-full text-left font-medium">Services</button>
              <div className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${serviceOpen ? 'max-h-96' : 'max-h-0'}`}>
                <button onClick={() => handleNav('/services/filling')} className="block w-full text-left hover:text-blue-600">Filling Station</button>
                <button onClick={() => handleNav('/services/logistics')} className="block w-full text-left hover:text-blue-600">Logistics</button>
                <button onClick={() => handleNav('/services/weightbridgePage')} className="block w-full text-left hover:text-blue-600">Weight Bridge</button>
              </div>
            </div>

            <button onClick={() => handleNav('/contactpage')} className="block w-full text-left">Contact Us</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;