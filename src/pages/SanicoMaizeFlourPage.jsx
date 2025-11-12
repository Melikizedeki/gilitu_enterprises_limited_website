import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import unga from '../assets/SanicoSembe.png'
import maizebag from '../assets/maize/maizebag.png'
import whitemaize from '../assets/whitemaize.png'
import maizecln from '../assets/maize/maizecln.jpg'
import maizegrid from '../assets/maize/maizegrid.jpg'
import maizetest from '../assets/maize/maizetest.jpg'

export default function SanicoMaizeFlourPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#F1F8E9] via-[#E1F5A9] to-[#C5E1A5] text-gray-800">

<section
  className="relative h-screen flex items-center justify-center"
  style={{
    backgroundImage: `url('/maizecov.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}
>
        <div className="absolute inset-0  bg-opacity-50" />
        <motion.div 
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-extrabold text-yellow-500  drop-shadow-lg">Sanico Maize Flour</h1>
          <p className="mt-6 text-2xl text-yellow-500 max-w-3xl mx-auto">
            Premium Quality Flour for the Best Tanzanian Meals — From Farm to Table.
          </p>
        </motion.div>
      </section>

      {/* Story Intro */}
      <section id="story" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold text-green-900 mb-6"
          data-aos="fade-up"
        >The Legacy of Quality Maize Flour</motion.h2>
        <motion.p 
          className="text-lg text-gray-700 max-w-3xl mx-auto"
          data-aos="fade-up" data-aos-delay="200"
        >
          Sanico Maize Flour is the result of years of expertise, where we carefully select the finest maize from Tanzanian farms. From its grinding process to packaging, we ensure each bag is packed with nutrition, flavor, and the best possible quality.
        </motion.p>
      </section>

      {/* Floating Flour Image */}
      <section className="px-6 py-16 max-w-4xl mx-auto w-full flex justify-center">
        <motion.img 
          src={maizebag} 
          alt="Sanico Maize Flour Bag" 
          className="rounded-2xl shadow-2xl w-full md:w-2/3" 
          initial={{ scale: 0.8, opacity: 0 }} 
          whileInView={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1 }}
          data-aos="zoom-in"
        />
      </section>

      {/* Production Process - Step Layout */}
      <section id="process" className="bg-[#E8F5E9] py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-green-900">How Sanico Maize Flour Is Made</h2>
        </div>
        <div className="space-y-20 max-w-6xl mx-auto px-4">
          {[ 
            {
              title: '1. Maize Selection', 
              desc: 'We select only the finest maize from local Tanzanian farms for that authentic flavor and rich texture.',
              img: whitemaize
            },
            {
              title: '2. Clean and Process', 
              desc: 'The maize is carefully cleaned and processed to retain maximum nutrition and flavor.',
              img: maizecln
            },
            {
              title: '3. Grinding', 
              desc: 'The maize is ground to perfection, ensuring a fine, smooth flour ideal for cooking.',
              img: maizegrid
            },
            {
              title: '4. Quality Assurance', 
              desc: 'Each batch is tested for purity, quality, and consistency, ensuring you always get the best.',
              img: maizetest
            },
            {
              title: '5. Packaging', 
              desc: 'Sanico Maize Flour is sealed in hygienic packaging to retain freshness and quality.',
              img: unga
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className={`flex flex-col md:flex-row items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`} 
              data-aos="fade-up" data-aos-delay={`${i * 200}`}
            >
              <img src={item.img} className="w-full md:w-1/2 rounded-xl shadow-lg" alt={item.title} />
              <div className="md:w-1/2 md:px-10 py-6 text-center md:text-left">
                <h3 className="text-2xl font-bold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Sanico Section */}
      <section id="benefits" className="bg-gradient-to-br from-white to-green-50 py-20">
        <h2 className="text-3xl font-extrabold text-center text-green-900 mb-12">Why Choose Sanico Maize Flour?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            '100% Tanzanian maize, supporting local farmers',
            'Perfectly ground for smooth consistency',
            'Packed with essential nutrients for healthy meals',
            'Ideal for making traditional Tanzanian dishes',
            'Naturally gluten-free and non-GMO',
            'Available in various sizes to meet your needs'
          ].map((benefit, i) => (
            <motion.div 
              key={i} 
              className="bg-green-100 p-6 rounded-xl text-center shadow-md hover:scale-105 transform transition duration-300"
              data-aos="fade-up" data-aos-delay={`${i * 100}`}
            >
              <h4 className="text-lg font-semibold text-green-800">{benefit}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section id="cta" className="bg-green-900 text-white py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Elevate Your Meals with Sanico Maize Flour</h2>
        <p className="text-lg max-w-xl mx-auto mb-8">Experience the taste of quality maize flour for all your meals. Order now and enjoy freshness, taste, and nutrition!</p>
 
      </section>

    </div>
  );
}
