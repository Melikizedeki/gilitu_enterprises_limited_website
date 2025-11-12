import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sanfitweb from '../assets/sanfitweb.png'
import seedsel from '../assets/sanfit/seedsel.jpg'
import sanfitpr from '../assets/sanfit/sanfitpr.jpg'
import sanfitfilt from '../assets/sanfit/sanfitfilt.jpg'
import sunflowercook from '../assets/sanico/sunflowercook.jpg'
import sanfitp from '../assets/sanfit/sanfitp.png'
import solvent from '../assets/sanfit/solvent.png'
import milling from '../assets/milling.png'
import { BiSolidCalendarEvent } from 'react-icons/bi';


export default function SanfitSunflowerOilPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#FFFCEB] via-[#FFF5CC] to-[#FFE999] text-gray-800">
     

      {/* Hero Section with Parallax Background */}
      <section className="relative h-screen overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover z-0"
                src="/sanfitv.mp4" // Reference to the video in the public folder
              />
              <div className="absolute inset-0  bg-opacity-50 z-10" />
              <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6">
                <motion.h1
                  className="text-6xl font-extrabold drop-shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Sanfit Sunflower Oil
                </motion.h1>
                <motion.p
                  className="mt-6 text-xl max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  Sanfit oil is created from the second cold press of the same premium sunflower seeds used in Sanico. It carries the nutrition, flavor, and heart of purity — offered at an affordable price. This is everyday brilliance.
                </motion.p>
              </div>
            </section>
      

      {/* Floating Oil Image */}
      <section className="px-6 py-16 max-w-4xl mx-auto flex justify-center" data-aos="zoom-in">
        <motion.img 
          src={sanfitp} 
          alt="Sanfit Oil Bottle" 
          className="bg-white w-full rounded-2xl shadow-2xl " 
          initial={{ scale: 0.8, opacity: 0 }} 
          whileInView={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1 }}
        />
      </section>

      {/* Production Process - Step Layout */}
      <section id="process" className="bg-[#FFFBE7] py-24">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-yellow-900">How Sanfit is Made</h2>
        </div>
        <div className="space-y-20 max-w-6xl mx-auto px-4">
          {[ 
            {
              title: '1. Selective Seeds', 
              desc: 'We select only the finest Tanzanian-grown sunflower seeds.', 
              img: seedsel
            },
            {
              title: '2. First stem Press for Sanico', 
              desc: 'The richest oil goes into our premium Sanico brand.', 
              img: milling
            },
            {
              title: '3. Second stem Press for Sanfit', 
              desc: 'Sanfit is pressed gently to retain taste and affordability.', 
              img: solvent
            },
            {
              title: '4. Refinery and Fortification', 
              desc: 'After extraction, the crude oil is purified and vitamins like Vitamin A are added to boost its nutritional value.', 
              img: sanfitfilt
            },
            {
              title: '5. Modern Packaging', 
              desc: 'Hygienically sealed to stay fresh and safe in every bottle.', 
              img: sanfitweb
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className={`flex flex-col md:flex-row items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              data-aos="fade-up"
            >
              <img src={item.img} className="w-full md:w-1/2 rounded-xl shadow-lg" alt={item.title} />
              <div className="md:w-1/2 md:px-10 py-6 text-center md:text-left">
                <h3 className="text-2xl font-bold text-yellow-800 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reasons Section */}
      <section id="reasons" className="bg-gradient-to-br from-white to-yellow-50 py-20">
        <h2 className="text-3xl font-extrabold text-center text-yellow-900 mb-12">Why Use Sanfit?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            'Economical and family-friendly',
            'Naturally filtered with no additives',
            'Produced from Tanzanian farms',
            'Perfect balance of taste and nutrition',
            'Safe for frying and daily cooking',
            'Packed with Vitamin E & light aroma',
          ].map((reason, i) => (
            <motion.div 
              key={i} 
              className="bg-yellow-100 p-6 rounded-xl text-center shadow-md hover:scale-105 transform transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              data-aos="fade-up"
            >
              <h4 className="text-lg font-semibold text-yellow-800">{reason}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section id="cta" className="bg-yellow-900 text-white py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Make Sanfit Your Everyday Hero</h2>
        <p className="text-lg max-w-xl mx-auto mb-8">Health. Savings. Tanzanian pride. Grab Sanfit today and elevate your everyday meals.</p>
        
      </section>
    </div>
  );
}
