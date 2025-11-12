import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sanicoreal from  '../assets/sanicoreal.png'
import filtration from '../assets/sanico/filtration.jpg'
import refinery from '../assets/sanico/refinery.png'
import seedcollection from '../assets/sanico/seedcollection.jpg'
import sanicoweb from  '../assets/sanicoweb.png'
import milling from '../assets/milling.png'

export default function SanicoSunflowerOilPage() {
  useEffect(() => {
    AOS.init({
      duration: 1200,  // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Animation will only happen once when scrolled into view
    });
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-200">
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-900" data-aos="fade-up">Sanico Sunflower Oil</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-yellow-800" data-aos="fade-up" data-aos-delay="200">
          Natural, Pure & Locally Produced Sunflower Oil for Healthier Living
        </p>
      </section>

     <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-4">
  <img
    src={sanicoreal}
    alt="Sanico Oil Bottle"
    className="w-full h-auto rounded-xl shadow-md"
  />
</section>

        
    
      {/* Production Title */}
      <section className="text-center py-10 px-4 bg-yellow-50">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-800" data-aos="fade-up">Sanico Production Process</h2>
      </section>

      {/* Production Steps */}
      {[ 
        // Add "data-aos" to each element
        {
          title: "1. Seed Collection",
          desc: "We begin with premium sunflower seeds grown in fertile Tanzanian soil...",
          img: seedcollection,
        },
        {
          title: "2. Cleaning & Sorting",
          desc: "The seeds are meticulously cleaned and sorted...",
          img: refinery,
        },
        {
          title: "3. Milling ",
          desc: "This is the process of grinding sunflower seeds to extract crude oil. It involves cleaning, dehulling, and pressing the seeds to release the raw oil....",
          img: milling,
        },
        {
          title: "4. Refinery and Fortification",
          desc: "After extraction, the crude oil is refined to remove impurities, odors, and unwanted substances. During this stage, essential vitamins such as Vitamin A are added to the oil to enhance its nutritional value and support public health...",
          img: filtration,
        },
        {
          title: "5. Bottling & Packaging",
          desc: "Finally, the oil is bottled in sanitized food-grade containers...",
          img:  sanicoweb,
        },
      ].map((step, index) => (
        <section
          key={index}
          className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 py-12 px-6 md:px-12 bg-gradient-to-r ${index % 2 === 0 ? 'from-yellow-50 to-white' : 'from-white to-yellow-50'}`}
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-yellow-900 mb-4">{step.title}</h3>
            <p className="text-gray-700 text-sm sm:text-base">{step.desc}</p>
          </div>
          <div className="flex-1">
            <img
              src={step.img}
              alt={step.title}
              className="rounded-xl shadow-md w-full h-auto max-h-[300px] object-cover"
            />
          </div>
        </section>
      ))}

      {/* Mid Branding */}
      <section className="py-16 bg-yellow-200 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-900" data-aos="fade-up">Why Choose Sanico Sunflower Oil?</h2>
        <p className="text-lg text-yellow-800 mt-3 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Healthy. Local. Trusted. A choice every household deserves.
        </p>
      </section>

      {/* Reasons to Use */}
      {[ /* Add animation to each section */ ]}

      
    </div>
  );
}
