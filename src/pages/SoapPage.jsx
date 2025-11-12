import { motion } from "framer-motion";
import { CheckCircle, Sparkles, Leaf } from "lucide-react";
import soap from '../assets/soap.png'

export default function SoapPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-100 to-white py-16 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-700">
            Sanico Herbal Soap
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Naturally crafted for your skin’s glow and protection.
          </p>
          
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute -top-16 -right-16 text-yellow-200 opacity-20 text-[250px] pointer-events-none"
        >
          <Sparkles />
        </motion.div>
      </section>

      {/* Animated Counter Section */}
      <section className="py-12 px-6 bg-yellow-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Why People Trust Sanico</h2>
        <div className="flex justify-center flex-wrap gap-10 text-yellow-700">
          {[{label: "Users", end: 12000}, {label: "Stores", end: 450}, {label: "Positive Reviews", end: 9800}].map(({label, end}, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.3, duration: 1.5 }}
                >
                  {end}+
                </motion.span>
              </div>
              <p className="text-lg">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add glowing animation and parallax background */}
      <section className="relative py-20 bg-gradient-to-br from-white to-yellow-50 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 left-0 w-full h-full bg-[url('/images/soap-bg.png')] bg-no-repeat bg-contain bg-center opacity-10 animate-pulse"
        ></motion.div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Leaf className="mx-auto text-yellow-400 w-10 h-10 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Powered by Nature</h2>
          <p className="text-lg max-w-xl mx-auto">
            Each bar of Sanico Soap blends carefully selected herbal ingredients to give you
            the most natural skincare experience with a modern touch.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src={soap}
          alt="Sanico Soap"
          className="rounded-2xl shadow-lg w-full"
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Gentle. Pure. Effective.</h2>
          <p className="text-lg mb-4">
            Sanico Soap is a premium herbal soap made with natural ingredients to cleanse,
            nourish, and protect your skin. Ideal for all skin types.
          </p>
          <ul className="space-y-2">
            {["No harsh chemicals", "Infused with natural oils", "Suitable for daily use", "Dermatologist recommended"].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="flex items-center gap-2"
              >
                <CheckCircle className="text-green-600 w-5 h-5" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {["I've never felt my skin this soft! I’m hooked!", "Gentle on my skin and smells amazing.", "Cured my dryness without irritation.", "Great for the whole family!"]
            .map((quote, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-yellow-50 p-6 rounded-xl shadow-md"
              >
                <p className="text-lg italic">“{quote}”</p>
              </motion.div>
            ))}
        </div>
      </section>
    </div>
  );
}
