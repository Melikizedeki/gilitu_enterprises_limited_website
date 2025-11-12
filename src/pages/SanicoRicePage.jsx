import React from 'react';
import { motion } from 'framer-motion';
import mchele from '../assets/Sanicorice.png'
import { Leaf, Drumstick, PackageSearch, Star } from 'lucide-react';

export default function SanicoRicePage() {
  return (
    <div className="font-sans text-gray-800 bg-[#F8F9FA]">
      {/* Hero Section with Video */}
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover z-0"
          src="/rice.mp4" // Reference to the video in the public folder
        />
        <div className="absolute inset-0  bg-opacity-50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <motion.h1
            className="text-6xl font-extrabold drop-shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Sanico Premium Rice
          </motion.h1>
          <motion.p
            className="mt-6 text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Light, Fluffy & Naturally Aromatic — Tanzanian Excellence in Every Grain
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#2B2B2B] mb-4">Discover the Taste of Purity</h2>
        <p className="text-lg text-gray-600">
          At Sanico, we bring you rice that’s carefully harvested and expertly processed. Our grains retain their natural aroma and nutritional value — perfect for every household and special meal.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={mchele}
            alt="Sanico Rice Bag"
            className="rounded-2xl shadow-lg w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div>
            <h3 className="text-3xl font-semibold text-[#2B2B2B] mb-6">Why Sanico Rice?</h3>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-center space-x-3">
                <Leaf className="text-green-600" /> <span>100% Natural & Unpolished</span>
              </li>
              <li className="flex items-center space-x-3">
                <Star className="text-yellow-500" /> <span>High Aroma & Long-Grain Texture</span>
              </li>
              <li className="flex items-center space-x-3">
                <Drumstick className="text-red-400" /> <span>Perfect for Pilau, Biriani, and Plain Meals</span>
              </li>
              <li className="flex items-center space-x-3">
                <PackageSearch className="text-blue-500" /> <span>Modern, Hygienic Packaging</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#F4F5F7] py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2B2B2B]">What Our Customers Say</h2>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6 text-gray-700">
          {[
            { name: "Mama Asha", comment: "Sanico Rice ni laini sana na harufu yake ni nzuri mno!" },
            { name: "Juma S.", comment: "Ni bora zaidi kwa pilau na biriani. Nafurahia sana bidhaa hii." },
            { name: "Esther M.", comment: "Nimekuwa nikitumia Sanico kwa miaka miwili — bora zaidi Tanzania!" },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <p className="italic">“{t.comment}”</p>
              <p className="mt-4 font-semibold text-[#2B2B2B]">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#1E3A34] text-white py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Experience Tanzanian Purity Today</h2>
        <p className="text-lg max-w-xl mx-auto mb-8">
          Sanico Rice is your everyday companion — from festive meals to family dinners. Choose freshness, choose quality.
        </p>
        
      </section>

      
    </div>
  );
}
