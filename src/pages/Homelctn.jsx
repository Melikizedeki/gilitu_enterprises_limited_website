import React from 'react';
import { motion } from 'framer-motion';
import Tanzania from '../assets/flags/Tanzania.jpg';
import Kenya from '../assets/flags/Kenya.jpg';
import Uganda from '../assets/flags/Uganda.jpg';
import SouthAfrica from '../assets/flags/SouthAfrica.jpg';
import Rwanda from '../assets/flags/Rwanda.jpg';
import Burundi from '../assets/flags/Burundi.jpg';

const flags = [
  { src: Kenya, alt: 'Kenya' },
  { src: Tanzania, alt: 'Tanzania' },
  { src: Uganda, alt: 'Uganda' },
  { src: SouthAfrica, alt: 'South Africa' },
  { src: Rwanda, alt: 'Rwanda' },
  { src: Burundi, alt: 'Burundi' },
];

const Homelctn = () => {
  return (
    <section
      className="relative w-full py-20 px-6 sm:px-12 bg-cover bg-center text-white"
      style={{ backgroundImage: `url('/earth.jpg')` }}
    >
      <div className="text-black bg-opacity-50 p-6 rounded-lg max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-12">Covering Multiple Countries</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-center items-center">
          {flags.map((flag, index) => (
            <motion.img
              key={flag.alt}
              src={flag.src}
              alt={flag.alt}
              className="w-24 h-24 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 0.1,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Homelctn;
