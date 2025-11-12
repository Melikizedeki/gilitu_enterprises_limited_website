import React from 'react';
import { motion } from 'framer-motion';
import sanico from '../assets/SANICO 5L GALLON.png';
import sanfit from '../assets/SANFIT5LT.png';
import unga from '../assets/SanicoSembe.png';
import mchele from '../assets/Sanicorice.png';
import soap from '../assets/soap.png';
import doc from '../assets/DOCweb.png';

const products = [
  { src: sanico, title: 'SANICO COOKING OIL' },
  { src: sanfit, title: 'SANFIT COOKING OIL' },
  { src: unga, title: 'SANICO MAIZE FLOUR' },
  { src: mchele, title: 'SANICO RICE' },
  { src: soap, title: 'SANICO SOAP' },
  { src: doc, title: 'DE-OILED CAKE' },
];

const Homebrand = () => {
  return (
    <section
      className="relative w-full py-16 px-4 sm:px-8 bg-cover bg-center"
      style={{ backgroundImage: `url('/backbrand.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          OUR TOP LINE PRODUCTS
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              className="bg-[#C5C6D0] bg-opacity-20 backdrop-blur-lg p-4 rounded-xl shadow-xl"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={product.src}
                alt={product.title}
                className="w-full max-h-64 object-contain rounded-lg mb-4 transition duration-300"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, repeatType: 'loop', delay: index * 0.2 }}
              />
              <h3 className="text-lg font-semibold text-black">{product.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Homebrand;
