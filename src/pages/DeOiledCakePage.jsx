import { motion } from "framer-motion";
import { CheckCircle, Leaf, ShoppingCart } from "lucide-react";
import doc from  '../assets/DOCweb.png'
import CountUp from "react-countup";
import deoiled from '../assets/deoiled.jpg'

export default function DeOiledCakePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-200 to-white py-20 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-700">
            Sanico De-Oiled Cake
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            A nutrient-rich, sustainable byproduct for better farming and livestock care.
          </p>
          
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute -top-20 -left-20 text-green-200 opacity-15 text-[300px] pointer-events-none"
        >
          <Leaf />
        </motion.div>
      </section>

      {/* Product Photo Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold text-green-700 mb-6">De-Oiled Cake in Action</h2>
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={deoiled} // Replace with your product photo path
          alt="De-Oiled Cake"
          className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
        />
        <p className="text-lg mt-6 max-w-2xl mx-auto">
          Our Sanico De-Oiled Cake is produced with the highest standards of quality to ensure that you get the most out of this sustainable agricultural byproduct.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-6 bg-green-50 text-center">
        <h2 className="text-3xl font-semibold text-green-700 mb-6">Why Sanico De-Oiled Cake?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[ 
            { label: "High Protein Content", icon: <Leaf className="text-green-500 w-8 h-8" /> },
            { label: "Improves Soil Fertility", icon: <CheckCircle className="text-green-500 w-8 h-8" /> },
            { label: "Sustainable Byproduct", icon: <ShoppingCart className="text-green-500 w-8 h-8" /> },
            { label: "Low Moisture", icon: <Leaf className="text-green-500 w-8 h-8" /> },
            { label: "Affordable and Effective", icon: <CheckCircle className="text-green-500 w-8 h-8" /> },
            { label: "Ideal for Livestock", icon: <ShoppingCart className="text-green-500 w-8 h-8" /> },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex items-center justify-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              {item.icon}
              <p className="text-lg font-medium text-green-700">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Info Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-green-700">What is De-Oiled Cake?</h2>
          <p className="text-lg">
            Sanico De-Oiled Cake is a versatile byproduct from the oil extraction process, rich in protein, fiber, and essential nutrients. It’s ideal for use in animal feed and agriculture, contributing to better soil health and sustainable farming practices.
          </p>
          
        </motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src={doc}
          alt="De-Oiled Cake"
          className="rounded-2xl shadow-xl w-full"
        />
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-green-100 text-center">
        <h2 className="text-3xl font-semibold text-green-700 mb-10">Customer Reviews</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[ 
            "Sanico De-Oiled Cake improved my farm’s productivity significantly. I’m impressed!", 
            "I’ve been using this for my livestock, and they are thriving! Great product.",
            "This product has helped improve the quality of my soil naturally. Highly recommend!",
            "Affordable, effective, and sustainable. I’m a loyal customer now."
          ].map((quote, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <p className="text-lg italic">“{quote}”</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Section */}
     

      {/* Call to Action Section */}
      <section className="py-12 px-6 bg-green-600 text-center text-white">
        <h2 className="text-3xl font-semibold mb-6">Ready to Improve Your Farm?</h2>
        <p className="text-lg mb-6">Order Sanico De-Oiled Cake today and experience the benefits firsthand for your crops and livestock.</p>
       
      </section>
    </div>
  );
}
