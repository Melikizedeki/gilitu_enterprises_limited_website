import React from 'react';
import { motion } from 'framer-motion';
import sheli from '../assets/sheli.jpg';
import diesel from '../assets/sheli/diesel.jpg'
import petrole from '../assets/sheli/petrole.jpg'
import parking from '../assets/sheli/parking.jpg'

export default function FillingStationPage() {
  return (
    <div className="bg-gradient-to-br from-[rgb(255,250,240)] to-[#F7E1B5] text-gray-800">
      
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-8"
        style={{  backgroundImage: `url('/fuel.jpg')` }}
      >
       
        <div className="absolute inset-0  bg-opacity-60" />
        <motion.div
          className="relative z-10 text-center max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
            Fueling Your Journey, Anytime, Anywhere
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-yellow-300">
            Fast, reliable service and top-quality fuel wherever you are.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 md:px-12">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-900 text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Our Filling Stations?
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            className="space-y-5 text-gray-700 text-base sm:text-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              More than just a fuel stop. We offer comfort, safety, and convenience — all in one place.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>24/7 reliable fuel service</li>
              <li>Premium fuel quality</li>
              <li>Strategically located outlets</li>
              <li>Eco-conscious refueling systems</li>
            </ul>
          </motion.div>
          <motion.img
            src={sheli}
            alt="Filling station"
            className="rounded-lg w-full shadow-md object-cover"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>
{/* Our Services */}
<section className="bg-yellow-50 py-16 px-4 sm:px-6 md:px-12">
  <motion.h2
    className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-900 text-center mb-12"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    Our Services
  </motion.h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {[
      {
        title: 'Petrol',
        desc: 'Premium petrol fuel to keep your engine running smoothly.',
        img: petrole,
      },
      {
        title: 'Diesel',
        desc: 'High-efficiency diesel fuel suitable for all diesel engines.',
        img: diesel,
      },
      {
        title: 'Car Parking',
        desc: 'Secure and spacious parking for your convenience.',
        img: parking,
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
          className="w-full h-auto object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-bold text-yellow-900 mb-2">{service.title}</h3>
        <p className="text-gray-700 flex-1">{service.desc}</p>
      </motion.div>
    ))}
  </div>
</section>



      {/* Testimonials */}
      <section className="bg-yellow-100 py-16 px-4 sm:px-6 md:px-12">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-900 text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          What Our Customers Say
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg text-gray-700 text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Trusted by thousands. Hear directly from our satisfied customers.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {[
            {
              quote: '"Always clean, always friendly. I never go anywhere else."',
              name: 'Jane M.',
            },
            {
              quote: '"Top-tier fuel and top-tier service every single time."',
              name: 'Daniel K.',
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
              <span className="font-semibold text-yellow-900">{testimonial.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-900 text-white py-20 px-4 sm:px-6 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Ready for a Smooth Drive?
        </motion.h2>
        <p className="text-base sm:text-lg max-w-xl mx-auto mb-8">
          Find the nearest station and experience our trusted service.
        </p>
      
      </section>
    </div>
  );
}
