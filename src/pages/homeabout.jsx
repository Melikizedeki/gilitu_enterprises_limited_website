import React from 'react';
import { FaEye, FaHandshake, FaWalking } from 'react-icons/fa'; // Icons for better looks

const HomeAbout = () => {
  return (
    <section className="relative w-full min-h-[80vh] -mt-20 flex flex-col justify-center items-center text-white text-center px-4 sm:px-8 md:px-16">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/sanicovideo.mp4" // <-- Replace with your actual video path
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay for opacity effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="flex flex-col items-center bg-[#228B22] bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg animate-float">
  <FaWalking className="text-5xl mb-4" />
  <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
  <p className="text-sm text-black">
    To source and distribute high quality
      Grain mills and raw materials to meet the
        diverse needs of our clients.
  </p>
</div>

{/* Vision */}
<div className="flex flex-col items-center bg-[#228B22] bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg animate-float">
  <FaEye className="text-5xl mb-4" />
  <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
  <p className="text-sm text-black">
    To be the leading supplier of innovative
    milling products and contributing to a
    robust and sustainable agricultural ecosystem . 
 
  </p>
</div>

{/* Values */}
<div className="flex flex-col items-center bg-[#228B22] bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg animate-float">
  <FaHandshake className="text-5xl mb-4" />
  <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
  <p className="text-sm text-black">
    Integrity, Quality, Sustainability, and Commitment to Excellence.
  </p>
      </div>         
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
