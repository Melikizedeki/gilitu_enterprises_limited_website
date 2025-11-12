import React from 'react';
import { motion } from 'framer-motion';
import HomeAbout from './homeabout';
import Homebrand from './homebrand';
import Homelctn from './Homelctn';

const Home = () => {
  return (
    <div className="min-h-screen text-white bg-gray-100">
      {/* Hero Section */}
      <section
        className="w-full h-screen pt-16 bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
        style={{
          backgroundImage: `url('backimage.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto bg-black bg-opacity-50 p-6 md:p-8 rounded-lg"
        >
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg"
          >
            Welcome to Gilitu Enterprises Limited
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 drop-shadow-md"
          >
            High-quality sunflower oil for your needs. Pure, reliable, and natural.
          </motion.p>
        </motion.div>
      </section>

      {/* Section Transitions */}
      
        <HomeAbout />
      <Homebrand />
      <Homelctn />

      
    </div>
  );
};

export default Home;
