import React from 'react'
import { motion } from 'framer-motion';

const Product = () => {
  return (


<div className="bg-gradient-to-br from-[#FFFCEB] via-[#FFF5CC] to-[#FFE999] text-gray-800">
      

      {/* Hero Section with Parallax Background */}
      <section className="relative h-screen flex items-center justify-center hero-background" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505577058444-a3dab90d4253')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div 
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">Sanfit Sunflower Oil</h1>
          <p className="mt-6 text-2xl text-yellow-100 max-w-3xl mx-auto">
            A Second-Grade Gem From Sanico — Created For Greatness, Priced For Everyone
          </p>
        </motion.div>
      </section>

      {/* Story Intro */}
      <section id="story" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold text-yellow-900 mb-6"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
        >Born From Sanico. Designed For The Everyday Hero</motion.h2>
        <motion.p 
          className="text-lg text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Sanfit oil is created from the second cold press of the same premium sunflower seeds used in Sanico. It carries the nutrition, flavor, and heart of purity — offered at an affordable price. This is everyday brilliance.
        </motion.p>
      </section>

      {/* Floating Oil Image */}
      <section className="px-6 py-16 max-w-4xl mx-auto flex justify-center">
        <motion.img 
          src="https://images.unsplash.com/photo-1603808033192-58e3765c456e" 
          alt="Sanfit Oil Bottle" 
          className="rounded-2xl shadow-2xl w-full md:w-2/3" 
          initial={{ scale: 0.8, opacity: 0 }} 
          whileInView={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1 }}
        />
      </section>

      {/* Production Process - Step Layout */}
      <section id="process" className="bg-[#FFFBE7] py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-yellow-900">How Sanfit is Made</h2>
        </div>
        <div className="space-y-20 max-w-6xl mx-auto px-4">
          {[ 
            {
              title: '1. Selective Seeds', 
              desc: 'We select only the finest Tanzanian-grown sunflower seeds.', 
              img: 'https://images.unsplash.com/photo-1576354302913-36b15f54b7ed'
            },
            {
              title: '2. First Press for Sanico', 
              desc: 'The richest oil goes into our premium Sanico brand.', 
              img: 'https://images.unsplash.com/photo-1611080626919-c9bfa264c42c'
            },
            {
              title: '3. Second Cold Press for Sanfit', 
              desc: 'Sanfit is pressed gently to retain taste and affordability.', 
              img: 'https://images.unsplash.com/photo-1615986200077-c45f47135c6d'
            },
            {
              title: '4. Triple Filtration', 
              desc: 'We remove any impurities without losing natural flavor.', 
              img: 'https://images.unsplash.com/photo-1633345673184-3d5b74d9a132'
            },
            {
              title: '5. Modern Packaging', 
              desc: 'Hygienically sealed to stay fresh and safe in every bottle.', 
              img: 'https://images.unsplash.com/photo-1601302150838-06c893b81dba'
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className={`flex flex-col md:flex-row items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
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

      {/* Testimonial Carousel */}
      <section className="py-24 px-6 bg-yellow-50 text-center">
        <h2 className="text-3xl font-bold text-yellow-900 mb-6">What Our Customers Say</h2>
        <motion.div className="flex justify-center">
          <motion.div 
            className="carousel-container"
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <div className="testimonial-slide">
              <p className="text-lg text-gray-700">"Sanfit has transformed my cooking, it's affordable and delicious!"</p>
              <p className="text-yellow-800 font-semibold">- Jane Doe</p>
            </div>
            <div className="testimonial-slide">
              <p className="text-lg text-gray-700">"I love the taste! It’s the perfect oil for everyday meals."</p>
              <p className="text-yellow-800 font-semibold">- John Smith</p>
            </div>
            {/* Add more slides here */}
          </motion.div>
        </motion.div>
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
        <button className="bg-white text-yellow-900 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-200 transition duration-300">Order Sanfit Now</button>
      </section>

    </div>
  )
}

export default Product