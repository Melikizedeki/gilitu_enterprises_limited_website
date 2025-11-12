import React from 'react';
import { motion } from 'framer-motion';
import kenta from '../assets/logistic/kenta.png'
import howo from '../assets/logistic/Howo.png'


export default function LogisticsTransportPage() {
  return (
    <div className="bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: `url('/scania.jpg')` }}>
        <div className="absolute inset-0 bg-opacity-50" />
        <motion.div className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">Reliable Transport & Logistics</h1>
          <p className="mt-6 text-2xl text-blue-100 max-w-3xl mx-auto">
            With our state-of-the-art fleet and expert logistics team, we ensure your goods are transported safely and on time.
          </p>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <motion.h2 className="text-4xl font-bold text-blue-900 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}>
          Our Transport Solutions
        </motion.h2>
        <motion.p className="text-lg text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          We offer full-service logistics solutions for businesses, ensuring safe, timely deliveries and cost-effective freight management.
        </motion.p>
      </section>

      <section className="bg-blue-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center">
  <motion.h2
    className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 sm:mb-6"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    Why Partner With Us?
  </motion.h2>
  
  <motion.p
    className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Our logistics team ensures that your shipments are handled with care, timely deliveries, and transparent tracking.
  </motion.p>

  <ul className="text-left text-base sm:text-lg text-gray-600 max-w-3xl mx-auto space-y-3 sm:space-y-4 md:space-y-5 pl-5 sm:pl-6 list-disc">
    <li>Efficient tracking and transparency</li>
    <li>Reliable and timely deliveries</li>
    <li>Flexible transport solutions for all industries</li>
  </ul>
</section>


      {/* Our Fleet */}
<section className="py-24 px-6">
  <motion.h2
    className="text-4xl font-bold text-blue-900 mb-6"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    Our Fleet
  </motion.h2>
  <div className="grid md:grid-cols-2 gap-8">
    <div className="fleet-card bg-white p-8 shadow-lg rounded-xl">
      <img
        src={howo}
        alt="Scania Truck"
        className="w-full h-auto object-cover rounded-lg mb-6"
      />
      <h3 className="text-xl font-bold text-blue-900">Long Vehicles</h3>
      <p className="text-gray-600">
        Our Long Vehicles trucks are powerful and reliable, built for long-haul transport and heavy-duty performance.
      </p>
    </div>
    <div className="fleet-card bg-white p-8 shadow-lg rounded-xl">
      <img
        src={kenta}
        alt="Canter Truck"
        className="w-full h-auto object-cover rounded-lg mb-6"
      />
      <h3 className="text-xl font-bold text-blue-900">Light-Duty Trucks</h3>
      <p className="text-gray-600">
        Our Light-Duty trucks are perfect for medium-scale deliveries, offering flexibility and efficiency in urban routes.
      </p>
    </div>
  </div>
</section>


      {/* CTA */}
      <section className="bg-blue-900 text-white py-24 text-center px-6">
        <motion.h2 className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}>
          Ready to Get Started?
        </motion.h2>
        <p className="text-lg max-w-xl mx-auto mb-8">Whether you need to transport goods across town or across the country, we’re ready to assist you.</p>
        
      </section>
    </div>
  );
}
