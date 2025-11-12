import React from 'react';
import { motion } from 'framer-motion';
import dcover from '../assets/weight/dcover.png';
import vsoftware from '../assets/weight/vsoftware.png';
import receipt from '../assets/weight/receipt.png';
import limit from '../assets/weight/limit.png';


export default function WeightbridgePage() {
  return (
    <div className="bg-gradient-to-br from-[#F3F4ED] to-[#DCE1DE] text-gray-800">
      
      {/* Hero Section */}
      <section
        className="relative min-h-[100vh] flex items-center justify-center bg-cover bg-center  px-4"
        style={{  backgroundImage: `url('/wcover.png')` }}
      >
        <div className="absolute inset-0 bg-opacity-60" />
        <motion.div
          className="relative z-10 text-center max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Reliable & Accurate Weightbridge Services
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-green-100">
            Ensuring precision in every load — for fair trade and safe roads.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Our Weightbridge */}
      <section className="py-20 px-6 md:px-12">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-green-900 text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Why Our Weightbridge Services Stand Out?
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6 text-lg text-gray-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              We provide fast, dependable, and certified weighing solutions for a wide range of vehicles and cargos.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Digital, certified weighing systems</li>
              <li>Real-time load monitoring</li>
              <li>Accurate invoicing and receipts</li>
              <li>Available 24/7 at major logistics points</li>
            </ul>
          </motion.div>
          <motion.img
            src={dcover}
            alt="Weightbridge"
            className="rounded-lg w-full shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-green-50 py-20 px-6 md:px-12">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-green-900 text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          What We Offer
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: 'Truck Weighing',
              desc: 'Get accurate axle and gross weight readings for any truck type.',
              img: vsoftware,
            },
            {
              title: 'Load Documentation',
              desc: 'Instant generation of receipts and digital records for each load.',
              img: receipt,
            },
            {
              title: 'Compliance Checks',
              desc: 'Ensure legal road load limits are not exceeded to avoid penalties.',
              img: limit,
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-green-900 mb-2">{service.title}</h3>
              <p className="text-gray-700 flex-1">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-100 py-20 px-6 md:px-12">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-green-900 text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Clients Weigh In
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          From fleet operators to logistics firms, our service speaks for itself.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {[
            {
              quote: '"Accurate results every time. Fast and efficient!"',
              name: 'LogiTrack Ltd.',
            },
            {
              quote: '"The weightbridge has helped us stay compliant and save money."',
              name: 'GreenMove Haulage',
            },
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md text-center max-w-md mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <p className="italic text-gray-700 mb-4">{testimonial.quote}</p>
              <span className="font-semibold text-green-900">{testimonial.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-900 text-white py-20 text-center px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Need to Weigh a Load?
        </motion.h2>
        <p className="text-lg max-w-xl mx-auto mb-8">
          Visit one of our certified weightbridge stations today.
        </p>
        
      </section>
    </div>
  );
}
